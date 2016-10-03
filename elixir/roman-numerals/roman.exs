defmodule Roman do

  @roman_num_map [
    %{value: 1000, numeral: "M"  },
    %{value: 900,  numeral: "CM" },
    %{value: 500,  numeral: "D"  },
    %{value: 400,  numeral: "CD" },
    %{value: 100,  numeral: "C"  },
    %{value: 90,   numeral: "XC" },
    %{value: 50,   numeral: "L"  },
    %{value: 40,   numeral: "XL" },
    %{value: 10,   numeral: "X"  },
    %{value: 9,    numeral: "IX" },
    %{value: 5,    numeral: "V"  },
    %{value: 4,    numeral: "IV" },
    %{value: 1,    numeral: "I"  }
  ];

  def numerals(number) do
    to_roman(number, @roman_num_map, [])
    |> Enum.join
  end

  defp to_roman(num, map = [curr_num | rest], num_encoded ) do
    if num >= curr_num.value do
      to_roman(num - curr_num.value, map, [curr_num.numeral | num_encoded ])
    else
      to_roman(num, rest, num_encoded)
    end
  end

  defp to_roman(num, [], num_encoded) do
    num_encoded |> Enum.reverse
  end

end
