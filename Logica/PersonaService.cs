using System;
using Datos;
using Entidad;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class PersonaService
    {
        private readonly ParcialContext _context;

        public PersonaService(ParcialContext context)
        {
            _context = context;
        }
    }
}
