using System.Numerics;

namespace Counter.Core.Interfaces;

public interface ICountService
{
    object locker { get; set; }
    void IncrementNumber(string numberAsString);
    string GetNumber();
}