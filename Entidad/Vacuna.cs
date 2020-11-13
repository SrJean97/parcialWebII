using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using Newtonsoft.Json;

namespace Entidad
{
    public class Vacuna
    {
        [Key]
        public int Id { get; set; }        
        public string PersonaFk { get; set; }
        public string Tipo { get; set; }
        public int Edad { get; set; }
        public DateTime Aplicado { get; set; }
    }
}