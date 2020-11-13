import { Pipe, PipeTransform } from '@angular/core';
import { Vacuna } from '../parcial/models/vacuna';

@Pipe({
  name: 'consultaEstudiante'
})
export class ConsultaEstudiantePipe implements PipeTransform {

  
    transform(vacuna: Vacuna[], searchText: string): any {
      if (searchText == null) return vacuna;
          return vacuna.filter(p =>
            p.persona.identificacion.indexOf(searchText.toLowerCase())
          );
    }
  

}
