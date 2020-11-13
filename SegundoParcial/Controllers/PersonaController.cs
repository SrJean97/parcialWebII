using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
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
        public IConfiguration Configuration { get; }
        public PersonaController(GeneralContext context)
        {
            PS = new PersonaService(context);
            //string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            //PS = new PersonaService(connectionString);
        }

        // GET: api/Persona
        [HttpGet]
        public IEnumerable<PersonaView> Gets()
        {
            //var psns = PS.ConsultarTodos().Select(p=> new PersonaView(p));
            return psns;
        }

        // POST: api/Persona
        [HttpPost]
        public ActionResult<PersonaView> Post(PersonaInputModel psnInput)
        {
            Persona psn = MapearPersona(psnInput);
            //var response = PS.Guardar(psn);
            if (response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Persona);
        }

        private Persona MapearPersona(PersonaInput psnInput)
        {
            var psn = new Persona
            {
                Id = psnInput.Id
            };
            return psn;
        }
    }

}