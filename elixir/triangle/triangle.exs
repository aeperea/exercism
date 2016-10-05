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

  defp get_kind(a, a, a) when are_all_positive(a, a, a) and is_valid(a, a, a), do: {:ok, :equilateral}
  defp get_kind(a, b, b) when are_all_positive(a, b, b) and is_valid(a, b, b), do: {:ok, :isosceles}
  defp get_kind(a, b, c) when are_all_positive(a, b, c) and is_valid(a, b, c), do: {:ok, :scalene}

end
