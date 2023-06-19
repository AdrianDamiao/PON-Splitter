using Microsoft.AspNetCore.Mvc;
using PonSpecsCalculator.Models;

namespace PonSpecsCalculator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalcsController : ControllerBase
    {
        public CalcsController()
        {
        }

        [HttpPost]
        [Route("calculate")]
        public IActionResult CalculatePonSpecs(PonSpecs inputSpecs)
        {
            return Ok(inputSpecs.CalculateEmptyVariable());
        }
    }
}