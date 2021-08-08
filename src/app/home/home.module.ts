import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import {NbAlertModule, NbButtonModule, NbCardModule, NbIconModule} from "@nebular/theme";



@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbAlertModule,
  ]
})
export class HomeModule { }
