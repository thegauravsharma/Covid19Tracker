import { Component } from '@angular/core';
import { FetchRecordsService } from './fetch-records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FetchRecordsService]
})


export class AppComponent {
  title = 'Covid 19 Tracker - India';
  totalCases: any;
  totalActive: "0";
  totalConfirmed: "0";
  totalRecovered: ""
  totalDeaths: "0";
  totalDeltaConfirmed: "0";
  totalDeltaDeaths: "0";
  totalDeltaRecovered: "0";

  totalTests: any;
  totalTested: "0";
  totalDeltaTested: "";
  testSource: "";
  updatedOn: "";

  totalStatewiseCases: any;

  constructor(private fetchRecords: FetchRecordsService) {

    this.fetchRecords.getData().subscribe(
      response => {
        let fetchedData:any = response;
            this.totalCases = fetchedData.statewise[0];
            this.totalActive = this.totalCases.active;
            this.totalConfirmed = this.totalCases.confirmed;
            this.totalRecovered = this.totalCases.recovered;
            this.totalDeaths = this.totalCases.deaths;
            this.totalDeltaConfirmed = this.totalCases.deltaconfirmed;
            this.totalDeltaDeaths = this.totalCases.deltadeaths;
            this.totalDeltaRecovered = this.totalCases.deltarecovered;
            this.updatedOn = this.totalCases.lastupdatedtime;
            
            this.totalTests = fetchedData.tested[fetchedData.tested.length - 1];
            this.totalTested = this.totalTests.totalsamplestested;
            this.totalDeltaTested = this.totalTests.samplereportedtoday;
            this.testSource = this.totalTests.source;

            this.totalStatewiseCases = fetchedData.statewise;

            console.log('Response: >>> ', this.totalStatewiseCases);
      },
      error => {
        console.log('Error: >>> ', error);
      }
    ); // fetching recoreds
    
  } // constructure ends here

} //class ends here
