
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { ServiciosocialComponent } from './components/sections/admisiontramites/serviciosocial/serviciosocial.component';
import { TitulacionComponent } from './components/sections/admisiontramites/titulacion/titulacion.component';
import { BecasComponent } from './components/sections/admisionytramites/becas/becas.component';
import { AdmisiontramitesComponent } from './components/sections/admisiontramites/admisiontramites.component';

// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'admisiontramites',component: AdmisiontramitesComponent},
    {path: 'serviciosocial',component: ServiciosocialComponent },
    {path: 'titulacion',component: TitulacionComponent}
  
import { ModuleWithProviders, Component } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { InscripcionComponent } from './components/sections/admisionytramites/inscripcion/inscripcion.component';
import { ServiciosocialComponent } from './components/sections/admisiontramites/serviciosocial/serviciosocial.component';
import { TitulacionComponent } from './components/sections/admisiontramites/titulacion/titulacion.component';
import { AdmisiontramitesComponent } from './components/sections/admisiontramites/admisiontramites.component';
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
