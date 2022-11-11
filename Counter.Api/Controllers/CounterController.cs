using Counter.Core.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Counter.Api.Controllers;

public class CounterController : BaseApiController
{
    public CounterController()
    {
        
    }
    
    [HttpPost]
    public async Task<ActionResult<CounterDto>> Increment([FromBody]CounterDto counterDto)
    {
        Console.WriteLine(counterDto.RandomNumber);
        return Ok(counterDto);
    }
}