using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Persona
    {
        [Key]
        public string Id { get; set; }
        public string Tipo { get; set; }
        public string Nombre { get; set; }
        public DateTime Nacimiento { get; set; }
        public string Institucion { get; set; }
        public string Acudiente { get; set; }
    }
}