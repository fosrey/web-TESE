import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { InscripcionComponent } from './admisionytramites/inscripcion/inscripcion.component';
import { ReinscripcionComponent } from './admisionytramites/reinscripcion/reinscripcion.component';

@NgModule({
  declarations: [
    HomeComponent,
    InscripcionComponent,
    ReinscripcionComponent
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
