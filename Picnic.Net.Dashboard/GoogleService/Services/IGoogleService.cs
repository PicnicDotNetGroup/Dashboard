using System;
using System.Collections.Generic;
using GoogleService.Boundary;

namespace GoogleService.Services
{
    public interface IGoogleService
    {
        IEnumerable<IGoogleModel> GetData();
    }
}
