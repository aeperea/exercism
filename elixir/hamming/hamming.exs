defmodule Hamming do
  def hamming_distance(strand1, strand2) do
    if Enum.count(strand1) != Enum.count(strand2) do
      {:error, "Lists must be the same length"}
    else
      count_mismatches(strand1, strand2, 0)
    end
  end

  defp count_mismatches([same | rest1], [same | rest2], count), do: count_mismatches(rest1, rest2, count)
  defp count_mismatches([a | rest1], [b | rest2], count), do: count_mismatches(rest1, rest2, count + 1)
  defp count_mismatches([], [], count), do: {:ok, count}

end
