using System;
using System.IO;
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
        string[] Scopes = { CalendarService.Scope.CalendarReadonly };
        string ApplicationName = "Google Calendar API .NET Quickstart";
        
        public IGoogleModel GetData()
        {
			UserCredential credential;

			using (var stream =
			 new FileStream("client_secret.json", FileMode.Open, FileAccess.Read))
				{
					string credPath = ".credentials/dashboard.json";

					credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
						GoogleClientSecrets.Load(stream).Secrets,
						Scopes,
						"user",
						CancellationToken.None,
						new FileDataStore(credPath, true)).Result;
					Console.WriteLine("Credential file saved to: " + credPath);
				}

				// Create Google Calendar API service.
				var service = new CalendarService(new BaseClientService.Initializer()
				{
					HttpClientInitializer = credential,
					ApplicationName = ApplicationName,
				});

				// Define parameters of request.
				EventsResource.ListRequest request = service.Events.List("en.usa#holiday@group.v.calendar.google.com");
				request.TimeMin = DateTime.Now;
				request.ShowDeleted = false;
				request.SingleEvents = true;
				request.MaxResults = 10;
				request.OrderBy = EventsResource.ListRequest.OrderByEnum.StartTime;

                var req1 = service.CalendarList.List();

				// List events.
				Events events = request.Execute();

                var b = req1.Execute();

				Console.WriteLine("Upcoming events:");
				if (events.Items != null && events.Items.Count > 0)
				{
					foreach (var eventItem in events.Items)
					{
						string when = eventItem.Start.DateTime.ToString();
						if (String.IsNullOrEmpty(when))
						{
							when = eventItem.Start.Date;
						}
						Console.WriteLine("{0} ({1})", eventItem.Summary, when);
					}
				}
				else
				{
					Console.WriteLine("No upcoming events found.");
				}
			
            return new CalendarItem();    
        }
    }
}
