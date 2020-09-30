using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backtrack_carrier_designation.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backtrack_carrier_designation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarrierDesignationController : ControllerBase
    {
        [HttpGet()] //api/CarrierDesignation
        public IActionResult GetDetailsAsync()
        {
            List<CarrierModel> carriers = new List<CarrierModel>();
            carriers = DataAccess.DB.GetCarriers();
            foreach (var carrier in carriers)
            {
                if (carrier.RepairsNeeded > 0)
                {
                    carrier.Destination = "Repair";
                    carrier.TopDestination = "Repair";
                    carrier.BottomDestination = "Repair";
                }
                else
                {
                    if (carrier.TopCount >= carrier.TopLimit)
                    {
                        carrier.TopDestination = "Clean";
                        carrier.Destination = "Clean";
                    }
                    if (carrier.BottomCount >= carrier.BottomLimit)
                    {
                        carrier.BottomDestination = "Clean";
                        carrier.Destination = "Clean";
                    }
                }

            }
            return Ok(carriers);           
        }
    }
}
