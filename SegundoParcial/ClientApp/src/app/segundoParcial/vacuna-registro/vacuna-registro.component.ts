import { Component, OnInit } from '@angular/core';
import { VacunaService } from 'src/app/services/vacuna.service';
import { Vacuna } from '../models/vacuna';

@Component({
  selector: 'app-vacuna-registro',
  templateUrl: './vacuna-registro.component.html',
  styleUrls: ['./vacuna-registro.component.css']
})
export class VacunaRegistroComponent implements OnInit {

  vacuna: Vacuna;
  constructor(private vacunaService : VacunaService) { }

  ngOnInit() {
    this.vacuna = new Vacuna;
  }

  add(){
    this.vacunaService.post(this.vacuna).subscribe(p => {

      if (p != null) {
      
      alert('Vacuna Registrada exitosamente!');
      
      this.vacuna = p;
      
      }
      
      });
  }

}
