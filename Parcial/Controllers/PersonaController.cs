using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SegundoParcial.Models;


namespace SegundoParcial.Controllers
{
    [Route("api/persona")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly PersonaService PS;
        private readonly VacunaService VS;
        public IConfiguration Configuration { get; }
        public PersonaController(GeneralContext context)
        {
            PS = new PersonaService(context);
            VS = new VacunaService(context);
            //string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            //PS = new PersonaService(connectionString);
        }

        // GET: api/Persona
        [HttpGet]
        public IEnumerable<PersonaView> Gets()
        {
            //var psns = PS.ConsultarTodos().Select(p=> new PersonaView(p));
            var psns = PS.ConsultarTodos().Select(p=> new PersonaView(p, VS.ConsultarByPsn(p.Id)));
            return psns;
        }

        // GET: api/Persona/id
        [HttpGet("{id}")]
        public ActionResult<PersonaView> Get(string id)
        {
            //var psns = PS.ConsultarTodos().Select(p=> new PersonaView(p));
            return new PersonaView(PS.Consultar(id), VS.ConsultarByPsn(id));
        }

        // POST: api/Persona
        [HttpPost]
        public ActionResult<PersonaView> Post(PersonaInput psnInput)
        {
            Persona psn = MapearPersona(psnInput);
            var rta = PS.Guardar(psn);
            if (rta.Error)
            {
                return BadRequest(rta.Mensaje);
            }
            return Ok();
        }

        private Persona MapearPersona(PersonaInput p)
        {
            return new Persona
            {
                Id = p.identificacion,
                Tipo = p.tipoDocumento,
                Nombre = p.nombreEstudiante,
                Nacimiento = p.fechaNacimiento,
                Institucion = p.nombreInstitucion,
                Acudiente = p.acudiente
            };
        }
    }

}