class Trinary
  def initialize(num)
    @num = num.gsub("\n", "")
  end

  def to_decimal
    return 0 if (@num =~ /^[0-2]+$/).nil?
    @num.reverse.chars.map.with_index {|n, i| n.to_i * 3 ** i }.reduce(:+)
  end

end

module BookKeeping
  VERSION = 1
end
