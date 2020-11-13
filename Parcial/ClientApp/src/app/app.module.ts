import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PersonaRegistroComponent } from './parcial/persona-registro/persona-registro.component';
import { VacunaRegistroComponent } from './parcial/vacuna-registro/vacuna-registro.component';
import { PersonaConsultaComponent } from './parcial/persona-consulta/persona-consulta.component';
import { VacunaConsultaComponent } from './parcial/vacuna-consulta/vacuna-consulta.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaEstudiantePipe } from './pipe/consulta-estudiante.pipe';
import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PersonaRegistroComponent,
    VacunaRegistroComponent,
    PersonaConsultaComponent,
    VacunaConsultaComponent,
    AlertModalComponent,
    ConsultaEstudiantePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    /*RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),*/
    AppRoutingModule,
    NgbModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
