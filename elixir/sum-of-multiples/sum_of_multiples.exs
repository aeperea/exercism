defmodule SumOfMultiples do
  def to(limit, factors) do
    1..(limit - 1)
    |> Enum.filter(fn(n) -> Enum.any?(factors, fn(fact) -> rem(n, fact) == 0 end) end)
    |> Enum.sum
  end
end
