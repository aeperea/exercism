defmodule Bob do

  @phrases %{
    yell:      "Whoa, chill out!",
    question:  "Sure.",
    silence:   "Fine. Be that way!",
    whatever:  "Whatever."
  }

  def hey(input) do
    res = @phrases[:whatever]
    if is_question?(input), do: res = @phrases[:question]
    if is_yelling?(input),  do: res = @phrases[:yell]
    if is_silence?(input),  do: res = @phrases[:silence]
    res
  end

  def is_yelling?(input) do
    input == String.upcase(input) && not is_question?(input) && not only_nums_and_chars(input)
  end

  def only_nums_and_chars(input) do
    not Regex.match?(~r/[[:alpha:]]/u, input)
  end

  def is_question?(input) do
    Regex.match?(~r/\?$/, input)
  end

  def is_silence?(input) do
    not Regex.match?(~r/[[:alnum:]]/u, input)
  end

end
