using Counter.Core.Interfaces;

namespace Counter.Infrastructure.Services;

public class CounterService : ICountService
{
    private static Int64 _number;

    public CounterService()
    {
        _number = 0;
    }
    
    public void IncrementNumber(Int64 a)
    {
        Interlocked.Add(ref _number, a);
    }
    
    public  Int64 GetNumber()
    {
        return _number;
    }
}