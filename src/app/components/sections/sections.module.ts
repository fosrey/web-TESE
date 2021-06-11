import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { BecasComponent } from './admisiontramites/becas/becas.component';

import { ServiciosocialComponent } from './admisiontramites/serviciosocial/serviciosocial.component';
import { TitulacionComponent } from './admisiontramites/titulacion/titulacion.component';
import { AdmisiontramitesComponent } from './admisiontramites/admisiontramites.component';

import { InscripcionComponent } from './admisiontramites/inscripcion/inscripcion.component';


@NgModule({
  declarations: [
    HomeComponent,
      HomeComponent,
   BecasComponent,
    ServiciosocialComponent,
    TitulacionComponent,
    AdmisiontramitesComponent,
InscripcionComponent



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
