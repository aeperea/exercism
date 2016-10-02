defmodule Phone do
  @bad_num "0000000000"

  def number(raw) do
    clean_num = String.replace(raw, ~r/[\(\) -\.\+]/,"", global: true)
    size = String.length(clean_num)
    if has_only_digits(clean_num), do: process_num(String.codepoints(clean_num), size), else: @bad_num
  end

  defp has_only_digits(num) do
    Regex.match?(~r/^[0-9]+$/, num)
  end

  defp process_num(["1" | rest], 11), do: Enum.join(rest)
  defp process_num(num, 10), do: Enum.join(num)
  defp process_num(_, _), do: @bad_num

  def area_code(raw) do
    raw
    |> number
    |> String.slice(0,3)
  end

  def pretty(raw) do
    area = area_code(raw)
    num  = number(raw)
    "(#{area}) #{String.slice(num, 3, 3)}-#{String.slice(num, 6, 4)}"
  end
end
