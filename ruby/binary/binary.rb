require 'awesome_print'

class Binary
  def initialize(num_bin)
    raise ArgumentError if (num_bin =~ /^(1|0)+$/).nil?
    @num_bin = num_bin
  end

  def to_decimal
    @num_bin.reverse.chars.map.with_index do |char, i|
      if char == "1"
        2**i
      else
        0
      end
    end.reduce(:+)
  end
end

module BookKeeping
  VERSION = 2
end
