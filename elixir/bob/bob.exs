defmodule Bob do

  @phrases %{
    yell:      "Whoa, chill out!",
    question:  "Sure.",
    silence:   "Fine. Be that way!",
    whatever:  "Whatever."
  }

  def hey(input) do
    cond do
      is_question?(input) -> @phrases[:question]
      is_yelling?(input) ->  @phrases[:yell]
      is_silence?(input) ->  @phrases[:silence]
      true -> @phrases[:whatever]
    end
  end

  defp is_yelling?(input) do
    input == String.upcase(input) && not is_question?(input) && not only_nums_and_chars(input)
  end

  defp only_nums_and_chars(input) do
    not Regex.match?(~r/[[:alpha:]]/u, input)
  end

  defp is_question?(input) do
    Regex.match?(~r/\?$/, input)
  end

  defp is_silence?(input) do
    not Regex.match?(~r/[[:alnum:]]/u, input)
  end

end
