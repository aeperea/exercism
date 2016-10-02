defmodule Prime do

  @doc """
  Generates the nth prime.
  """
  @spec nth(non_neg_integer) :: non_neg_integer
  def nth(0) do raise "nope" end
  def nth(count) do
    Stream.iterate(2, &(&1 + 1))
    |> Stream.filter(&prime?/1)
    |> Enum.at(count - 1)
  end

  @spec prime?(non_neg_integer) :: boolean
  def prime?(2) do true end
  def prime?(number) do
    max_factor = round(:math.sqrt(number))
    not Enum.any?(2..max_factor, fn x -> rem(number, x) === 0 end)
  end
end
