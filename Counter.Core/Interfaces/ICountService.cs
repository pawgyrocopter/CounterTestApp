namespace Counter.Core.Interfaces;

public interface ICountService
{
    void IncrementNumber(Int64 a);
    Int64 GetNumber();
}