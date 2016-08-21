class Phrase
  attr_reader :word_count

  def initialize(phrase)
    @word_count = get_words(phrase)
  end

  def get_words(phrase)
    clean_phrase = phrase.gsub(/[\,\:]/, " ").downcase
    words_array = clean_phrase.split(" ").map do |word|
      word
        .gsub(/[^a-zA-Z0-9\-\']/,"")
        .gsub(/^\'|\'?$/, '')
    end

    turn_to_count_hash(words_array)
  end

  def turn_to_count_hash(words_array)
    Hash[words_array.map{ |w| [w, words_array.count(w)] }]
  end

end

module BookKeeping
  VERSION = 1
end
