using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
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
        public PersonaController(IConfiguration configuration)
        {
            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            //PS = new PersonaService(connectionString);
        }
        // GET: api/Persona
        /*[HttpGet]
        public IEnumerable<PersonaViewModel> Gets()
        {
            var psns = PS.ConsultarTodos().Select(p=> new PersonaViewModel(p));
            return psns;
        }

        // POST: api/Persona
        [HttpPost]
        public ActionResult<PersonaViewModel> Post(PersonaInputModel psnInput)
        {
            Persona psn = MapearPersona(psnInput);
            var response = PS.Guardar(psn);
            if (response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Persona);
        }

        private Persona MapearPersona(PersonaInputModel psnInput)
        {
            var psn = new Persona
            {
                Identificacion = psnInput.Identificacion
            };
            return psn;
        }*/
    }

}