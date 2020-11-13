using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entidad;
using Logica;
using Datos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SegundoParcial.Models;

namespace SegundoParcial.Controllers
{
    [Route("api/vacuna")]
    [ApiController]
    public class VacunaController : ControllerBase
    {
        private readonly VacunaService VS;

        public IConfiguration Configuration { get; }

        public VacunaController(GeneralContext context)
        {
            /*Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];*/
            VS = new VacunaService(context);
        }

        // GET: api/Vacuna
        [HttpGet]
        public IEnumerable<VacunaView> Gets()
        {
            //var vcns = PS.ConsultarTodos().Select(p=> new VacunaView(p));
            var vcns = VS.ConsultarTodos().Select(p=> new VacunaView(p));
            return vcns;
        }

        // POST: api/Vacuna
        [HttpPost]
        public ActionResult<VacunaView> Post(VacunaInput vcnInput)
        {
            Vacuna vcn = MapearVacuna(vcnInput);
            var rta = VS.Guardar(vcn);
            if (rta.Error)
            {
                return BadRequest(rta.Mensaje);
            }
            return Ok();
        }

        private Vacuna MapearVacuna(VacunaInput p)
        {
            return new Vacuna
            {
                Tipo = p.tipo,
                PersonaFk = p.persona.identificacion,
                Aplicado = p.aplicado,
                Edad = p.edad
            };
        }

    }
}