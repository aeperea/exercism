defmodule Prime do

  def nth(goal), do: get_nth_prime(2, 1, goal)

  defp is_prime(n) when n <= 3, do: true

  defp is_prime(n) do
    last = :math.sqrt(n) |> Float.floor |> round
    not (2..last |> Enum.any?(&(rem(n, &1) == 0)))
  end

  defp get_nth_prime(_, _, goal) when goal < 1, do: raise ArgumentError

  defp get_nth_prime(num, goal, goal), do: num

  defp get_nth_prime(num, count, goal) do
    new_count = if is_prime(num + 1), do: count + 1, else: count
    get_nth_prime(num + 1, new_count, goal)
  end

end
