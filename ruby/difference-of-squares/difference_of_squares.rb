class Squares
  def initialize(num)
    @num = num
  end

  def difference
    square_of_sum - sum_of_squares
  end

  def sum_of_squares
    (0..@num).to_a.map{ |n| n**2 }.reduce(:+)
  end

  def square_of_sum
    (0..@num).reduce(:+)**2
  end
end

module BookKeeping
  VERSION = 3
end
