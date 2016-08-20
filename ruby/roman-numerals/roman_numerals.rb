require 'awesome_print'

class Fixnum
  def to_roman
    raise ArgumentError if self > 3e3
    num_order    = self.to_s.chars.count
    num_reversed = self.to_s.reverse
    roman_num = ""
    (0..3).to_a.reverse.each do |order|
      roman_num << get_num(num_reversed[order].to_i, order) if order < num_order
    end
    roman_num
  end

  def get_num(n, order)
    roman_chars = numerals(order)
    return roman_chars[:one]*n                           if n <= 3
    return roman_chars[:one]  << roman_chars[:five]      if n == 4
    return roman_chars[:five] << roman_chars[:one]*(n-5) if n <= 8
    return roman_chars[:one]  << roman_chars[:ten]       if n == 9
  end

  def numerals(order)
    return {one: "I", five: "V", ten: "X"} if order == 0
    return {one: "X", five: "L", ten: "C"} if order == 1
    return {one: "C", five: "D", ten: "M"} if order == 2
    return {one: "M"}                      if order == 3
  end
end

module BookKeeping
  VERSION = 2
end
