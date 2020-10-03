using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backtrack_carrier_designation.Models
{
    public class CarrierModel
    {
        public string RFID { get; set; }
        public int CarrierNumber { get; set; }
        public string StyleDescription { get; set; }
        public string ColorDescription { get; set; }
        public string Destination { get; set; } = "Store"; //Destinations will change to Clean or Repair if needed
        public string TopDestination { get; set; } = "Store"; 
        public string BottomDestination { get; set; } = "Store";
        public int TopCount { get; set; }
        public int TopLimit { get; set; }
        public int BottomCount { get; set; } 
        public int BottomLimit { get; set; } = 300; //currently all carrier bottoms get cleaned every 300 rounds, regardless of style
        public string RepairReason { get; set; }
        public DateTime TimeScanned { get; set; }

    }
}
