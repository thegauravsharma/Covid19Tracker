import { Component, OnInit} from '@angular/core';
import { DataModule } from './data/data.module'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  earthquakes: GeoJSON.FeatureCollection;
  selectedCluster: { geometry: GeoJSON.Point; properties: any };

  constructor(private data: DataModule) {}

  ngOnInit() {
    const earthquakes: GeoJSON.FeatureCollection = this.data.earthquakesGeo;
      if (earthquakes.features.length) {
        earthquakes.features.pop();
      }
      this.earthquakes = { ...earthquakes };
  }

  selectCluster(event: MouseEvent, feature: any) {
    event.stopPropagation();
    this.selectedCluster = { geometry: feature.geometry, properties: feature.properties };
  }
}