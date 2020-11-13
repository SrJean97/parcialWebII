import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  formGroup: FormGroup;
  persona: Persona;
  constructor(private personaService : PersonaService, private formBuilder: FormBuilder, private rcrS:RecordService) { 
    this.buildForm();
  }

  ngOnInit() {
    this.persona = new Persona;
  }

  private buildForm(){
    this.persona = new Persona();
    this.persona.identificacion = '';
    this.persona.tipoDocumento = '';
    this.persona.nombreEstudiante = '';
    this.persona.fechaNacimiento = new Date();
    this.persona.nombreInstitucion = '';
    this.persona.acudiente = '';
    this.formGroup = this.formBuilder.group({
      identificacion: [this.persona.identificacion, Validators.required],
      tipoDocumento: [this.persona.tipoDocumento, Validators.required],
      nombreEstudiante: [this.persona.nombreEstudiante, Validators.required],
      fechaNacimiento: [this.persona.fechaNacimiento, Validators.required],
      nombreInstitucion: [this.persona.nombreInstitucion, Validators.required],
      acudiente: [this.persona.acudiente, Validators.required]
    });
  }

  get control(){
    return this.formGroup.controls;
  }

  onSubmit(){
    if(this.formGroup.invalid){
      return;
    }
    this.add();
  }

  add(){
    this.persona = this.formGroup.value;
    this.personaService.post(this.persona).subscribe(p => {

      if (p != null) {
      
      alert('Persona Registrada exitosamente!');
      this.rcrS.show = true;
      this.rcrS.psn = this.persona;
      this.persona = p;
      
      }
      
      });
  }

}
