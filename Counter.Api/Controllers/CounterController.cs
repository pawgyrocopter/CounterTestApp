﻿using Counter.Api.Hubs;
using Counter.Core.DTOs;
using Counter.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Counter.Api.Controllers;

public class CounterController : BaseApiController
{
    private readonly ICountService _countService;
    private readonly IHubContext<IncrementHub> _hub;

    public CounterController(ICountService countService, IHubContext<IncrementHub> hub)
    {
        _countService = countService;
        _hub = hub;
    }

    [HttpPost]
    public async Task<ActionResult<CounterDto>> Increment([FromBody] CounterDto counterDto)
    {
        _countService.IncrementNumber(counterDto.RandomNumber);
        await _hub.Clients.All.SendAsync("SendIncrementedValue", _countService.GetNumber());
        return Ok(_countService.GetNumber());
    }

    [HttpGet]
    public async Task<Int64> GetCurrentNumber()
    {
        return _countService.GetNumber();
    }
}