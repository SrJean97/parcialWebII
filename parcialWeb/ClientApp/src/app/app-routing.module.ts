import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRegistroComponent } from './parcialWeb/persona-registro/persona-registro.component';
import { PersonaConsultaComponent } from './parcialWeb/persona-consulta/persona-consulta.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path: 'personaRegistro', component : PersonaRegistroComponent },
  { path: 'personaConsulta', component : PersonaConsultaComponent }
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
