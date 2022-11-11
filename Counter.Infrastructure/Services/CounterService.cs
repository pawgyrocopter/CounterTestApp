using System.Numerics;
using Counter.Core.Interfaces;

namespace Counter.Infrastructure.Services;

public class CounterService : ICountService
{
    private BigInteger _number;
    public object locker { get; set; } = new();
    public CounterService()
    {
        _number = new BigInteger(0);
    }
    
    public void IncrementNumber(string numberAsString)
    {
        _number += BigInteger.Parse(numberAsString);
    }
    
    public string GetNumber()
    {
        return _number.ToString();
    }
    
}