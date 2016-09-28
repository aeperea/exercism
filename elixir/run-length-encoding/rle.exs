defmodule RunLengthEncoder do
  def encode(string) do
    string
    |> String.codepoints
    |> encode([])
    |> Enum.reverse
    |> Enum.map(fn({char, counter}) -> "#{counter}#{char}" end)
    |> Enum.join
  end

  defp encode([head | tail], [{head, counts} | output]) do
    encode(tail, [{head, counts + 1} | output])
  end

  defp encode([head | tail], output) do
    encode(tail, [{head, 1} | output])
  end

  defp encode([], output), do: output

  def decode(string) do
    Regex.scan(~r/(\d+)(.)/, string)
    |> Enum.map(fn ([_, count, char]) -> String.duplicate(char, String.to_integer(count)) end)
    |> Enum.join
  end

end
