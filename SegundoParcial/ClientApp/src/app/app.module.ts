import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonaRegistroComponent } from './segundoParcial/persona-registro/persona-registro.component';
import { PersonaConsultaComponent } from './segundoParcial/persona-consulta/persona-consulta.component';
import { VacunaConsultaComponent } from './segundoParcial/vacuna-consulta/vacuna-consulta.component';
import { VacunaRegistroComponent } from './segundoParcial/vacuna-registro/vacuna-registro.component';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PersonaRegistroComponent,
    PersonaConsultaComponent,
    VacunaConsultaComponent,
    VacunaRegistroComponent,
    AlertModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    /*RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),*/
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
