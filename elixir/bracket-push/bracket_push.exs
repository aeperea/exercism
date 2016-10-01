defmodule BracketPush do
  @open_brackets   ["(", "[", "{"]
  @closed_brackets [")", "]", "}"]

  def check_brackets(str) do
    str
    |> String.replace(~r/[^\[\]\{\}\(\)]/, "")
    |> String.codepoints
    |> analyze_balance([])
  end

  defp analyze_balance([current | rest], buffer) when current in @open_brackets do
    analyze_balance(rest, [current | buffer])
  end

  defp analyze_balance([current | _], _) when current in @closed_brackets do
    false
  end

  defp analyze_balance([")" | rest], ["(" | buffer]), do: analyze_balance(rest, buffer)
  defp analyze_balance(["]" | rest], ["[" | buffer]), do: analyze_balance(rest, buffer)
  defp analyze_balance(["}" | rest], ["{" | buffer]), do: analyze_balance(rest, buffer)

  # empty buffer -> balanced brackets
  defp analyze_balance([], []), do: true

  # buffer has elements unmatched!
  defp analyze_balance([], _),  do: false

end
