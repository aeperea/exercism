defmodule Raindrops do
  # I'm very ashamed of this code :(
  def convert(number), do: convert(number, "", [3, 5, 7])

  defp convert(number, str, mods) do
    if rem(number, 3) == 0 and Enum.member?(mods,3) do
      convert(number, str <> "Pling", mods |> Enum.filter_map(&(&1 != 3), &(&1)))
    else
      if rem(number, 5) == 0 and Enum.member?(mods,5) do
        convert(number, str <> "Plang", mods |> Enum.filter_map(&(&1 != 5), &(&1)))
      else
        if rem(number, 7) == 0 and Enum.member?(mods,7) do
          convert(number, str <> "Plong", mods |> Enum.filter_map(&(&1 != 7), &(&1)))
        else
          if str == "" do
            number |> Integer.to_string
          else
            str
          end
        end
      end
    end
  end

end
