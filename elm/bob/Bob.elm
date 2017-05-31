module Bob exposing (..)
import String exposing (..)

phrases = {
      yell     = "Whoa, chill out!"
    , question = "Sure."
    , silence  = "Fine. Be that way!"
    , whatever = "Whatever."
    }


isSilence : String -> Bool
isSilence phrase =
    phrase |> String.trim |> String.isEmpty

isQuestion : String -> Bool
isQuestion phrase =
    phrase |> String.endsWith("?")

isYelling : String -> Bool
isYelling phrase =
  String.toUpper phrase == phrase && String.toLower phrase /= phrase

hey : String -> String
hey phrase =
    if isYelling phrase then phrases.yell
    else if isQuestion phrase then phrases.question
    else if isSilence phrase then phrases.silence
    else phrases.whatever


