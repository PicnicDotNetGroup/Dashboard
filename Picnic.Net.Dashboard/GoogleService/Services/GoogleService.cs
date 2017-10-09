using System;
using GoogleService.Boundary;

namespace GoogleService.Services
{
    public abstract class GoogleService
    {
        public static IGoogleService GetGoogleService(GoogleServiceEnum service)
        {
            switch(service)
            {
                case GoogleServiceEnum.Calendar:
                    return new GoogleCalendar();
                default:
                    return null;
            }
        }
    }
}
