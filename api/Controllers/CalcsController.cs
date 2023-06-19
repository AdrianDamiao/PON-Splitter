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
            if(inputSpecs.Distance == null)
            {
                return Ok(inputSpecs.CalculateDistance()!.Value);
            }
            else if(inputSpecs.TransmissionPower == null)
            {
                return Ok(inputSpecs.CalculateTransmissionPower()!.Value);
            }
            else if(inputSpecs.ReceptionPower == null)
            {
                return Ok(inputSpecs.CalculateReceptionPower()!.Value);
            } 
            else if(inputSpecs.AttenuationCoefficient == null)
            {
                return Ok(inputSpecs.CalculateCoefficient()!.Value);
            }
            else
            {
                return BadRequest("Você precisa deixar um dos dados vazios.");
            }
        }
    }
}