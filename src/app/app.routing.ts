
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { ServiciosocialComponent } from './components/sections/admisionytramites/serviciosocial/serviciosocial.component'

// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'serviciosocial',component: ServiciosocialComponent }


];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
