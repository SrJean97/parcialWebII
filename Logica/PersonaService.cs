using Entity;
using Datos;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class PersonaService
    {
        private readonly GeneralContext _context;

        public PersonaService(GeneralContext context)
        {
            _context = context;
        }        
    }
}