using Entidad;
using System;
using System.Collections.Generic;

namespace SegundoParcial.Models
{
    public class PersonaInput
    {
        public string identificacion{ get; set; }
        public string tipoDocumento { get; set; }
        public string nombreEstudiante { get; set; }
        public DateTime fechaNacimiento { get; set; }
        public string nombreInstitucion { get; set; }
        public string acudiente { get; set; }
        //public List<Vacuna> vacunas { get; set; }
    }


    public class PersonaView : PersonaInput
    {
        public PersonaView()
        {

        }
        
        public PersonaView(Persona p, List<Vacuna> v)
        {
            identificacion = p.Id;
            tipoDocumento = p.Tipo;
            nombreEstudiante = p.Nombre;
            fechaNacimiento = p.Nacimiento;
            nombreInstitucion = p.Institucion;
            acudiente = p.Acudiente;
            vacunas = v??new List<Vacuna>();
        }

        public List<Vacuna> vacunas { get; set; }

    }

}