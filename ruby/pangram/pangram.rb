class Pangram
  def self.is_pangram?(str)
    alphabet_count = Hash[("a".."z").to_a.map{ |char| [char, 0] }]
    str.downcase.chars.each{ |char| alphabet_count[char] ? alphabet_count[char] +=1 : nil }
    !alphabet_count.map{ |k,v| v }.include?(0)
  end
end

module BookKeeping
  VERSION = 2
end
