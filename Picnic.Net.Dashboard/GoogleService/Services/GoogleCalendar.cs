using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Calendar.v3;
using Google.Apis.Calendar.v3.Data;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using GoogleService.Boundary;
using GoogleService.Models;


namespace GoogleService.Services
{
    public class GoogleCalendar : GoogleService, IGoogleService
    {
        
        private readonly string ApplicationName = "Dashboard";
        private const string API_KEY = "AIzaSyAFtGoV2zO6NgXF9XLFu0kTyGr6L_2ND8M";
        private IReadOnlyDictionary<string,string> CalendarIds = new Dictionary<string,string>()
        {
            {"USA","en.usa#holiday@group.v.calendar.google.com"},
            {"Poland","en.polish#holiday@group.v.calendar.google.com"},
            {"India", "en.indian#holiday@group.v.calendar.google.com"}
        };

        public IEnumerable<IGoogleModel> GetData()
        {
            var service = new CalendarService(new BaseClientService.Initializer()
            {
                ApplicationName = ApplicationName,
                ApiKey = API_KEY
            });

            var allEvents = GetAllEvents(service);

            foreach(var item in allEvents)
            {
				yield return new CalendarItem{
                    Id = new Guid().ToString(),
                    Date = DateTime.Now.ToString(),
                    Description = item.country,
                    Holidays = item.holiday.Select(e=> new CalendarItem{
                        Id = e.Id,
                        Date = e.Start.Date,
                        Description = e.Summary,
                    })
                };
            }
        }

        private IEnumerable<(string country,IEnumerable<Event> holiday)> GetAllEvents(CalendarService service)
        {
            foreach(var calendarId in CalendarIds)
            {
                EventsResource.ListRequest request = service.Events.List(calendarId.Value);
				request.TimeMin = DateTime.Now;
				request.ShowDeleted = false;
				request.SingleEvents = true;
				request.MaxResults = 30;
				request.OrderBy = EventsResource.ListRequest.OrderByEnum.StartTime;
				
                yield return (country: calendarId.Key, holiday: request.Execute().Items);
            }
        }
    }
}
