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

        public List<Vacuna> ConsultarTodos() {
            return _context.Vacunas.ToList();
        }

        public List<Vacuna> ConsultarByPsn(string id) {
            return _context.Vacunas.ToList().FindAll( x => x.Persona.Id == id);
        }

        public Response Guardar(Vacuna p){
            try
            {
                _context.Vacunas.Add(p);
                _context.SaveChangesAsync();
                return new Response("Proceso exitoso","Se ha guardado la Vacuna satisfactoriamente",null,false);
            }
            catch (System.Exception)
            {
                return new Response("Proceso fallido","No se ha podido guardar la Vacuna",null,false);                
            }
        }

    }
}