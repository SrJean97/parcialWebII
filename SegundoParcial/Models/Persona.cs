//using Entity;
using System;

namespace SegundoParcial.Model
{
    public class PersonaInput
    {
        public string identificacion{ get; set; }
        public string tipoDocumento { get; set; }
        public string nombreEstudiante { get; set; }
        public DateTime fechaNacimiento { get; set; }
        public string nombreInstitucion { get; set; }
        public string acudiente { get; set; }
        public List<Vacuna> vacunas { get; set; }
    }


    public class PersonaView : PersonaInput
    {
        public PersonaView()
        {  
        }
        /*public PersonaView(Persona psn)
        {
            //Identificacion = psn.Identificacion;
        }*/

        //public double ValorTotalAPagar { get; set; }
    }

}