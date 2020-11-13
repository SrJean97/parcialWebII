import { Component, OnInit } from '@angular/core';
import { VacunaService } from 'src/app/services/vacuna.service';
import { Vacuna } from '../models/vacuna';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-vacuna-registro',
  templateUrl: './vacuna-registro.component.html',
  styleUrls: ['./vacuna-registro.component.css']
})
export class VacunaRegistroComponent implements OnInit {

  id : string;

  formGroup: FormGroup;
  vacuna: Vacuna;
  constructor(private vacunaService : VacunaService, private formBuilder: FormBuilder,
    private modalService: NgbModal, private personaService: PersonaService, private rcrS:RecordService) { this.buildForm(); }

  ngOnInit() {
    this.vacuna = new Vacuna;
    //this.ConsultarPersona(this.id);
    this.formGroup.controls.id.valueChanges.subscribe(
      data => {
        //LLAMAR EL SERVICIO PARA BUSCAR CON DATA
        this.ConsultarPersona(data);
        console.log(data);
      }
    );
  }


  ConsultarPersona(id:string){
    if(id!=""){
      this.personaService.getId(id).subscribe(p => {
        if (p != null) {
          
          
          this.rcrS.show = true;
          this.rcrS.psn = p;
        }
        else{
         this.rcrS.show = false;
         this.rcrS.psn = null;
        }
      });
    }
    else{
      this.rcrS.show = false;
      this.rcrS.psn = null;
    }

  }



  private buildForm(){
    this.vacuna = new Vacuna();
    this.vacuna.tipo = '';
    this.vacuna.aplicado = new Date();
    this.vacuna.edad = 0;
    
    this.formGroup = this.formBuilder.group({
      id: [''],
      tipo: [this.vacuna.tipo, Validators.required],
      aplicado: [this.vacuna.aplicado, Validators.required],
      edad: [this.vacuna.edad, Validators.required]
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
    this.vacuna = this.formGroup.value;
    this.vacuna.persona = this.rcrS.psn;
    this.vacunaService.post(this.vacuna).subscribe(
      p => {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Se ha registrado la vacuna!!';      
        //this.vacuna = p;      
      },
      error => {
        console.log(error);
      }
      
    );
  }

}
