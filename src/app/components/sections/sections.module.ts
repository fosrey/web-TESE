import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { BecasComponent } from './admisiontramites/becas/becas.component';

import { ServiciosocialComponent } from './admisiontramites/serviciosocial/serviciosocial.component';
import { TitulacionComponent } from './admisiontramites/titulacion/titulacion.component';
import { AdmisiontramitesComponent } from './admisiontramites/admisiontramites.component';

import { InscripcionComponent } from './admisiontramites/inscripcion/inscripcion.component';
import { ReinscripcionComponent } from './admisiontramites/reinscripcion/reinscripcion.component';
import { CursosComponent } from './admisiontramites/cursos/cursos.component';
import { ProcesodeadmisionComponent } from './admisiontramites/procesodeadmision/procesodeadmision.component';


@NgModule({
  declarations: [
      HomeComponent,
   BecasComponent,
    ServiciosocialComponent,
    TitulacionComponent,
    AdmisiontramitesComponent,
InscripcionComponent,
ReinscripcionComponent,
CursosComponent,
ProcesodeadmisionComponent



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
