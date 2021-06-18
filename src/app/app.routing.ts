import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';

import { PaginaEgresadosComponent } from './components/sections/EGRESADOS-EXALUMNOS/pagina-egresados/pagina-egresados.component';
import { PaginaMquimicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mquimica/pagina-mquimica/pagina-mquimica.component';
import { PaginaMbioquimicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mbioquimica/pagina-mbioquimica/pagina-mbioquimica.component';
import { PaginaMsistemasComponent } from './components/sections/EGRESADOS-EXALUMNOS/MSistemas/pagina-msistemas/pagina-msistemas.component';
import { PaginaMeficienciaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Meficiencia/pagina-meficiencia/pagina-meficiencia.component';
import { PaginaMmecatronicaComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mmecatronica/pagina-mmecatronica/pagina-mmecatronica.component';
import { PaginaMgestionComponent } from './components/sections/EGRESADOS-EXALUMNOS/Mgestion/pagina-mgestion/pagina-mgestion.component';

//import carreras
import { CuerpoComponent } from './components/sections/carrera/cuerpo/cuerpo.component';
import { CuerpoSistemasComponent } from './components/sections/carrera/profesion/SistemasComputacionales/cuerpo-sistemas/cuerpo-sistemas.component';

import { PlantillaContenidoComponent } from './components/sections/plantilla-contenido/plantilla-contenido.component'


// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'egresadosyexalumnos', component: PaginaEgresadosComponent },
    { path: 'Mquimica', component: PaginaMquimicaComponent},
    { path: 'Mbioquimica', component: PaginaMbioquimicaComponent},
    { path: 'Msistemas', component: PaginaMsistemasComponent},
    { path: 'Meficienciaenergetica', component: PaginaMeficienciaComponent},
    { path: 'Mmecatronica', component: PaginaMmecatronicaComponent},
    { path: 'Mgestion', component:PaginaMgestionComponent},
    { path: 'Carreras', component: CuerpoComponent},
    { path:'Carreras/Sistemas', component: CuerpoSistemasComponent},

    { path: 'plantillacontenido', component:PlantillaContenidoComponent }

];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
