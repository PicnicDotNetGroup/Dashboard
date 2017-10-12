using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GPWStocks.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Picnic.Net.Dashboard.API.Controllers
{
    [Route("api/[controller]")]
    public class GPWStocksController : Controller
    {
        // GET api/GPWStocks/f
        [HttpGet("{symbol}")]
        public double Get(string symbol)
        {
            IGPWStocksService service = new GPWStocksService();
            return service.GetPrice(symbol);
        }
    }
}
