defmodule Anagram do
  def match(base, candidates) do
    candidates
    |> Enum.filter(fn(word) ->
      String.downcase(word) != String.downcase(base) &&
      String.length(word) == String.length(base) &&
      sort_and_glue(word) == sort_and_glue(base)
    end)
  end

  def sort_and_glue(str) do
    str
    |> String.downcase
    |> String.codepoints
    |> Enum.sort
    |> Enum.join
  end
end
