import { Injectable } from '@angular/core';
import { Persona } from '../parcial/models/persona';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  show = false;
  psn:Persona;
  
  constructor() { }
}
