using System;
using System.Collections.Generic;
using Google.Apis.Calendar.v3.Data;
using GoogleService.Boundary;

namespace GoogleService.Models
{
    public class CalendarItem : IGoogleModel
    {
        public string Id { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }
        public IEnumerable<CalendarItem> Holidays { get; set; }
    }
}
