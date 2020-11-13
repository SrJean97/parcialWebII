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
    [Route("api/vacuna")]
    [ApiController]
    public class VacunaController : ControllerBase
    {
        private readonly VacunaService VS;

        public IConfiguration Configuration { get; }

        public VacunaController(IConfiguration configuration)
        {
            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            //VS = new VacunaService(connectionString);
        }

        // GET: api/Vacuna
        [HttpGet]
        public IEnumerable<VacunaView> Gets()
        {
            //var psns = PS.ConsultarTodos().Select(p=> new VacunaView(p));
            var psns = VS.ConsultarTodos().Select(p=> new VacunaView(p));
            return psns;
        }

    }
}