defmodule Sublist do
  def compare(a, b) do
    cond do
      a === b      -> :equal
      inside(a, b) -> :superlist
      inside(b, a) -> :sublist
      true         -> :unequal
    end
  end

  defp inside(a,b) do
    size_a = Enum.count(a)
    size_b = Enum.count(b)

    cond do
      size_b > size_a -> false
      Enum.take(a, size_b) === b -> true
      true ->
        [_ | tail] = a
        inside(tail, b)
    end
  end

end
