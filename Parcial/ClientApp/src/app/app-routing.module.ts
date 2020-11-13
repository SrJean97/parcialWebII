import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRegistroComponent } from './parcial/persona-registro/persona-registro.component';
import { PersonaConsultaComponent } from './parcial/persona-consulta/persona-consulta.component';
import { VacunaRegistroComponent } from './parcial/vacuna-registro/vacuna-registro.component';
import { VacunaConsultaComponent } from './parcial/vacuna-consulta/vacuna-consulta.component';
import { RouterModule, Routes } from '@angular/router';

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
  exports: [RouterModule]
})
export class AppRoutingModule { }
