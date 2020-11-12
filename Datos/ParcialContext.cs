using System;
using Entidad;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class ParcialContext : DbContext
    {
        public ParcialContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Persona> personas { get; set; }
    }
}
