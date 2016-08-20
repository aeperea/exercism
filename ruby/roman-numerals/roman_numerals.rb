class Fixnum
  def to_roman
    num = self
    raise ArgumentError if num > 3e3
    num_order = num.to_s.chars.count
    roman_num = ""
    (0..3).to_a.reverse.each do |order|
      roman_num << get_num(num % (order) / (order - 1), order) if order < num_order
    end
    roman_num
  end

  def get_num(num, order)
    roman_chars = numerals(order)
    n = num % 10**order
    return roman_chars[:one]*n                           if n <= 3
    return roman_chars[:one]  << roman_chars[:five]      if n == 4
    return roman_chars[:five] << roman_chars[:one]*(5-n) if n <= 8
    return roman_chars[:one]  <<  roman_chars[:one]      if n == 9
  end

  def numerals(order)
    return {one: "I", five: "V", ten: "X"} if order == 0
    return {one: "X", five: "L", ten: "C"} if order == 1
    return {one: "C", five: "D", ten: "M"} if order == 2
    return {one: "M"}                      if order == 3
  end



end
