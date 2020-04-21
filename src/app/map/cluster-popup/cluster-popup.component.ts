import { Component, Input, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { GeoJSONSourceComponent } from 'ngx-mapbox-gl';

@Component({
  selector: 'app-cluster-popup',
  templateUrl: './cluster-popup.component.html',
  styleUrls: ['./cluster-popup.component.css']
})
export class ClusterPopupComponent {

  @Input() selectedCluster: { geometry: GeoJSON.Point; properties: any };
  @Input() clusterComponent: GeoJSONSourceComponent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  leaves: GeoJSON.Feature<GeoJSON.Geometry>[];

  ngOnChanges(changes: SimpleChanges) {
    this.changePage();
    if (changes.selectedCluster && !changes.selectedCluster.isFirstChange()) {
      this.paginator.firstPage();
    }
  }

  async changePage(pageEvent?: PageEvent) {
    let offset = 0;
    if (pageEvent) {
      offset = pageEvent.pageIndex * 5;
    }
    this.leaves = await this.clusterComponent.getClusterLeaves(this.selectedCluster.properties!.cluster_id, 5, offset);
  }
}
