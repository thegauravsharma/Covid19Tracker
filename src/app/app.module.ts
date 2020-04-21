import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ClusterPopupComponent } from './map/cluster-popup/cluster-popup.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { DataModule } from './map/data/data.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ClusterPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoidGhlcGl4ZWx3cml0ZXIiLCJhIjoiY2s5MW13NzhjMDE2aDNrbzExdTdwYXlxMyJ9.Dp66pfKNtkWCWxNyTSjZ9A',
      // geocoderAccessToken: 'TOKEN'
    }),
    MatListModule,
    MatPaginatorModule,
    NoopAnimationsModule
  ],
  providers: [DataModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
