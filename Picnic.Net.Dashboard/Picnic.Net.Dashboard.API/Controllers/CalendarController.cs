using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GoogleService.Services;
using GoogleService.Boundary;

namespace Picnic.Net.Dashboard.API.Controllers
{
    [Route("api/[controller]")]
    public class CalendarController : Controller
    {
        // GET: api/calendar
        [HttpGet]
        public IGoogleModel Get()
        {
            IGoogleService service = GoogleService.Services.GoogleService.GetGoogleService(GoogleServiceEnum.Calendar);
            IGoogleModel model = service.GetData();
            return service.GetData();
        }        
    }
}