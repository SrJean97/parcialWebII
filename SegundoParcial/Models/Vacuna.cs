using Entity;
using System;

namespace SegundoParcial.Models
{
    public class VacunaInput
    {
        //public string Identificacion{ get; set; }        
        public Persona persona { get; set; }
        public string tipo { get; set; }
        public virtual DateTime aplicado { get; set; }

    }


    public class VacunaView : VacunaInput
    {
        public VacunaView()
        {  
        }

        public VacunaView(Vacuna v)
        {
            persona = v.Persona;
            tipo = v.Tipo;
            aplicado = v.Aplicado;
        }
         
        public int edad { 
            get
            {
                return DateTime.Now.Year - persona.Nacimiento.Year;
            }
        }

    }

}