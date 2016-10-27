defmodule Isogram do
  def isogram?(sentence) do
    char_counts = build_char_counts(sentence)
    values      = Enum.map(char_counts, fn {_, v} -> v end)

    Enum.count(values) == Enum.sum(values)
  end

  defp build_char_counts(sentence) do
    sentence
    |> String.downcase
    |> String.replace(~r/[ -]/, "")
    |> String.codepoints
    |> Enum.reduce(%{}, fn(key, counter) -> Map.update(counter, key, 1, &(&1 + 1)) end)
  end

end
