defmodule Accumulate do
  def accumulate([head | tail], fun) do
    [fun.(head) | accumulate(tail, fun)]
  end

  def accumulate([], fun) do
    []
  end
end
