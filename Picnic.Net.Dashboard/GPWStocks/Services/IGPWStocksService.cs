using System;
using System.Collections.Generic;
using System.Text;

namespace GPWStocks.Services
{
    public interface IGPWStocksService
    {
        double GetPrice(string symbol);
    }
}
