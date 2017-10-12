using System;
using System.Collections.Generic;
using System.Text;

namespace GPWStocks.Services
{
    public class GPWStocksService : IGPWStocksService
    {
        public double GetPrice(string symbol)
        {
            return 42.0;
        }
    }
}
