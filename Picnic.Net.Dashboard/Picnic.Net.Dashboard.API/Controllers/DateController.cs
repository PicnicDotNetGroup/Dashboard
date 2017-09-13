using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Picnic.Net.Dashboard.API.Controllers
{
    [Route("api/[controller]")]
    public class DateController : Controller
    {
        // GET: api/date
        [HttpGet]
        public string Get()
        {
            var date = DateTime.Now;
            return string.Format($"{date.ToString("dddd")}, {date.Month}/{date.Day}/{date.Year}");
        }        
    }
}
