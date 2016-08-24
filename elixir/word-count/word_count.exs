defmodule Words do
  def count(sentence) do
    sentence
    |> clean_words_and_list
    |> Enum.reduce(%{}, fn(key, counter) -> Map.update(counter, key, 1, &(&1 + 1)) end)
  end

  defp clean_words_and_list(sentence) do
    sentence
    |> String.downcase
    |> String.split(~r/[^[:alnum:]-]/u, trim: true)
  end
end
