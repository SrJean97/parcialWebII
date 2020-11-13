using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class GeneralContext : DbContext
    {
        public GeneralContext(DbContextOptions options) : base(options) { }

        public DbSet<Persona> Personas { get; set; }    
        public DbSet<Vacuna> Vacunas { get; set; }

    }  
}