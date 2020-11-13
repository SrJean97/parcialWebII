import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { PersonaRegistroComponent } from './segundoParcial/persona-registro/persona-registro.component';
import { PersonaConsultaComponent } from './segundoParcial/persona-consulta/persona-consulta.component';
import { VacunaRegistroComponent } from './segundoParcial/vacuna-registro/vacuna-registro.component';
import { VacunaConsultaComponent } from './segundoParcial/vacuna-consulta/vacuna-consulta.component';

const routes: Routes = [
  /*{
    path: 'record',
    component: RecordComponent
  },*/
  { path: 'personaRegistro', component: PersonaRegistroComponent},
  { path: 'personaConsulta', component: PersonaConsultaComponent},
  { path: 'vacunaRegistro', component: VacunaRegistroComponent},
  { path: 'vacunaConsulta', component: VacunaConsultaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
