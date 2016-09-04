defmodule Raindrops do
  def convert(num) do
    result = get_word(num, 3, "i") <> get_word(num, 5, "a") <> get_word(num, 7, "o")
    if result != "" do
      result
    else
      to_string num
    end
  end

  defp get_word(n, mod, letter), do: rem(n, mod) == 0 && "Pl" <> letter <> "ng" || ""
end
