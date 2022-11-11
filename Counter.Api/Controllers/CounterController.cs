using Counter.Core.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Counter.Api.Controllers;

public class CounterController : BaseApiController
{
    public CounterController()
    {
        
    }
    
    [HttpPost]
    public async Task<IActionResult> Increment([FromBody]CounterDto counterDto)
    {
        return Ok();
    }
}