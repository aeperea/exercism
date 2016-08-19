class Sieve
  def initialize(num)
    @num = num
  end

  def primes(index = 2, num_list = (2..@num).to_a)
    return [] if @num < 2
    return num_list if index == @num
    new_list = num_list.map { |n| ( n == index || n % index ) == 0 ? nil : n }.compact
    primes(index +1, new_list)
  end
end

module BookKeeping
  VERSION = 3
end
