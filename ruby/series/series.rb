class Series
  def initialize(str)
    @str = str
  end

  def slices(num_of_slices)
    str_arr = @str.chars
    size    = str_arr.size
    raise ArgumentError if size < num_of_slices || num_of_slices < 1
    str_arr.map.with_index do |char, i|
      next if (i + num_of_slices - 1) >= (size)
      (i..(i + num_of_slices - 1)).to_a.map { |j| str_arr[j].to_i }
    end.compact
  end
end
