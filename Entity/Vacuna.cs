using System.ComponentModel.DataAnnotations;
using System;

namespace Entity
{
    public class Vacuna
    {
        [Key]
        public int Id { get; set; }
        public Persona Persona { get; set; }
        public string Tipo { get; set; }
        public int Edad { get; set; }
        public DateTime Aplicado { get; set; }
    }
}