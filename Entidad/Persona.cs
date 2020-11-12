using System.ComponentModel.DataAnnotations;
using Entidad;
using System;

namespace Entidad
{
    public class Persona
    {
        [Key]
        public string Identificacion { get; set; }
        public string Nombre { get; set;}
        public string Edad { get; set; }
    }
}
