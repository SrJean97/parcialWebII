using Entidad;
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

        public List<Persona> ConsultarTodos() {
            return _context.Personas.ToList();
        }

        public Persona Consultar(string id) {
            return _context.Personas.Find(id);
        }

        public Response Guardar(Persona p){
            try
            {
                var psn = _context.Personas.Find(p.Id);
                
                if(psn != null)
                    return new Response("Proceso fallido","Esta persona ya se encuentra registrada",null,true);

                _context.Personas.Add(p);
                _context.SaveChanges();
                return new Response("Proceso exitoso","Se ha guardado la persona satisfactoriamente",null,false); 
            }
            catch (System.Exception)
            {
                return new Response("Proceso fallido","No se ha podido guardar la persona",null,true);                
            }
        }

    }
}