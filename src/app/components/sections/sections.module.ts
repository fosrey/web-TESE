import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { BecasComponent } from './admisionytramites/becas/becas.component';

import { ServiciosocialComponent } from './admisiontramites/serviciosocial/serviciosocial.component';
import { TitulacionComponent } from './admisiontramites/titulacion/titulacion.component';
import { AdmisiontramitesComponent } from './admisiontramites/admisiontramites.component';

import { InscripcionComponent } from './admisionytramites/inscripcion/inscripcion.component';
import { ReinscripcionComponent } from './admisionytramites/reinscripcion/reinscripcion.component';


@NgModule({
  declarations: [
      HomeComponent,
   BecasComponent,
    ServiciosocialComponent,
    TitulacionComponent,
    AdmisiontramitesComponent,
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
