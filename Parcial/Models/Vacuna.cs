using Entidad;
using System;

namespace SegundoParcial.Models
{
    public class VacunaInput
    {
        //public string Identificacion{ get; set; }        
        public PersonaView persona { get; set; }
        public string tipo { get; set; }
        public DateTime aplicado { get; set; }         
        public int edad { 
            get
            {
                return DateTime.Now.Year - persona.fechaNacimiento.Year;
            }
            set {}
        }

    }


    public class VacunaView : VacunaInput
    {
        public VacunaView()
        {
        }

        public VacunaView(Vacuna v)
        {
            persona = new PersonaView() {
                identificacion = v.PersonaFk
            };
            tipo = v.Tipo;
            aplicado = v.Aplicado;
            edad = v.Edad;
        }

    }

}