defmodule Validity do
  defmacro are_all_positive(a, b, c), do: quote do: unquote(c) > 0 and unquote(a) > 0 and unquote(b) > 0
  defmacro is_valid(a, b, c), do: quote do: unquote(c) < (unquote(a) + unquote(b))
end

defmodule Triangle do
  import Validity

  def kind(a, b, c) do
    [aa, bb, cc] = Enum.sort([a, b, c])
    get_kind(aa, bb, cc)
  end

  defp get_kind(a, b, c) when not are_all_positive(a, b, c), do: {:error, "all side lengths must be positive"}
  defp get_kind(a, b, c) when not is_valid(a, b, c), do: {:error, "side lengths violate triangle inequality"}

  defp get_kind(a, a, a), do: {:ok, :equilateral}
  defp get_kind(_, a, a), do: {:ok, :isosceles}
  defp get_kind(a, _, a), do: {:ok, :isosceles}
  defp get_kind(a, a, _), do: {:ok, :isosceles}
  defp get_kind(_, _, _), do: {:ok, :scalene}
end
