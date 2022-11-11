using Counter.Core.DTOs;
using Counter.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Counter.Api.Controllers;

public class CounterController : BaseApiController
{
    private readonly ICountService _countService;

    public CounterController(ICountService countService)
    {
        _countService = countService;
    }
    
    [HttpPost]
    public async Task<ActionResult<CounterDto>> Increment([FromBody]CounterDto counterDto)
    {
        _countService.IncrementNumber(counterDto.RandomNumber);
        Console.WriteLine(_countService.GetNumber());
        return Ok(_countService.GetNumber());
    }
}