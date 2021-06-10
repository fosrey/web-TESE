import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { ServiciosocialComponent } from './admisionytramites/serviciosocial/serviciosocial.component';



@NgModule({
  declarations: [
    HomeComponent,
    ServiciosocialComponent


  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class SectionsModule { }
