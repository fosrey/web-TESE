
import { ModuleWithProviders, Component } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { InscripcionComponent } from './components/sections/admisiontramites/inscripcion/inscripcion.component';
import { ServiciosocialComponent } from './components/sections/admisiontramites/serviciosocial/serviciosocial.component';
import { TitulacionComponent } from './components/sections/admisiontramites/titulacion/titulacion.component';
import { AdmisiontramitesComponent } from './components/sections/admisiontramites/admisiontramites.component';

import { BecasComponent } from './components/sections/admisiontramites/becas/becas.component';


// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'inscripcion', component: InscripcionComponent },
	 {path: 'admisiontramites',component: AdmisiontramitesComponent},
    {path: 'serviciosocial',component: ServiciosocialComponent },
	    {path: 'titulacion',component: TitulacionComponent},
 { path: 'becas', component: BecasComponent}

];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
