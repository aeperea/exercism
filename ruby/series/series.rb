class Series
  def initialize(str)
    @str = str.chars.map(&:to_i)
  end

  def slices(num_of_slices)
    raise ArgumentError if num_of_slices > @str.length
    @str.each_cons(num_of_slices).to_a
  end
end
