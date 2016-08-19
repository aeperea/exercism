class Squares
  def initialize(num)
    @num = num
  end

  def difference
    square_of_sum - sum_of_squares
  end

  def sum_of_squares
    return 0 if @num == 0
    (1..@num).to_a.map{ |n| n**2 }.reduce(:+)
  end

  def square_of_sum
    return 0 if @num == 0
    (1..@num).reduce(:+)**2
  end
end

module BookKeeping
  VERSION = 3
end
