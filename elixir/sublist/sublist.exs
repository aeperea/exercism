defmodule Sublist do
  def compare(a, b) do
    # a in b - :sublist
    # b in a - :superlist
    # :equal, :unequal
    Enum.map(a, fn(v) -> Enum.member?(b,v))
    # if all matches -> sublist
    # if not, check with b in a
    # if all matches -> superlist




  end
end
