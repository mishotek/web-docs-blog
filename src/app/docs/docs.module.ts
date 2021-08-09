import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { DocsRoutingModule } from "./docs-routing.module";
import { HttpClientModule } from "@angular/common/http";
import {CoreModule} from "../core/core.module";



@NgModule({
  declarations: [
    DocsComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    HttpClientModule,
    CoreModule,
  ]
})
export class DocsModule { }
