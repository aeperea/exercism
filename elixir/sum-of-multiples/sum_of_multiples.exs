defmodule SumOfMultiples do
  def to(limit, factors) do
    factors
    |> Enum.map(fn(fact) ->
      if fact < limit do
        Enum.to_list(fact..limit-1)
        |> Enum.map(fn(v) -> if rem(v, fact) == 0, do: v, else: nil end)
      end
    end)
    |> List.flatten
    |> Enum.reject(fn(x) -> is_nil(x) == true end)
    |> Enum.uniq
    |> Enum.sum
  end
end
