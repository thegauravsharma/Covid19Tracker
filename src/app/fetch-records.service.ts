import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchRecordsService {
  
  data: string = 'https://api.covid19india.org/data.json';
  data_state_district_wise: string = 'https://api.covid19india.org/state_district_wise.json';
  data_states_daily: string = 'https://api.covid19india.org/states_daily.json';
  data_states_tested: string = 'https://api.covid19india.org/state_test_data.json';
  data_updates: string = 'https://api.covid19india.org/updatelog/log.json';
  data_india_topology: string = 'https://www.covid19india.org/maps/india.json';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.data);
  }
}
