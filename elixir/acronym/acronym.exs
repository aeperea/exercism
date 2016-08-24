defmodule Acronym do
  def abbreviate(string) do
    string
    |> clean_string_and_make_list
    |> Enum.map(&(&1 |> get_capitals_from_string |> String.upcase))
    |> Enum.join
  end

  defp get_capitals_from_string(string) do
    # didn't want to use regex to match uppercase chars (thanks HTML test)
    size  = String.length(string)
    first = string |> String.at(0)
    caps  = string |> String.slice(1, size) |> String.codepoints |> Enum.reject(&(&1 != String.upcase(&1))) |> Enum.join
    first <> caps
  end

  defp clean_string_and_make_list(string) do
    # removes special chars and splits into a list
    string |> String.split(~r/[^[:alnum:]]/u, trim: true)
  end
end
