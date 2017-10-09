using System;
using GoogleService.Boundary;

namespace GoogleService.Services
{
    public interface IGoogleService
    {
        IGoogleModel GetData();
    }
}
