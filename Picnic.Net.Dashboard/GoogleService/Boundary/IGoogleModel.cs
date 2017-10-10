using System;
using System.Collections.Generic;

namespace GoogleService.Boundary
{
    public interface IGoogleModel
    {
        string Id { get; set; }
		string Date { get; set; }
	    string Description { get; set; }
    }
}
