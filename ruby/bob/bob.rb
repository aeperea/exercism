class Bob
  PHRASES = {
    yell:      'Whoa, chill out!',
    question:  'Sure.',
    silence:   'Fine. Be that way!',
    whatever:  'Whatever.'
  }

  def hey(phrase)
    phrase = phrase.gsub("\n", " ")
    return PHRASES[:silence]  if is_silence(phrase)
    return PHRASES[:yell]     if is_yelling(phrase)
    return PHRASES[:question] if is_question(phrase)
    return PHRASES[:whatever]
  end

  def is_yelling(phrase)
    !(phrase =~ /[a-zA-Z]/).nil? && phrase == phrase.upcase
  end

  def is_question(phrase)
    !(phrase =~ /\?$/).nil?
  end

  def is_silence(phrase)
    (phrase =~ /[a-zA-Z0-9]/).nil?
  end
end
