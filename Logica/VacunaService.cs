using Entity;
using Datos;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class VacunaService
    {
        private readonly GeneralContext _context;

        public VacunaService(GeneralContext context)
        {
            _context = context;
        }        
    }
}