class Prime
  def self.nth(nth_prime)
    raise ArgumentError if nth_prime == 0
    index           = 1
    nth_prime_found = 2
    number          = 3
    while index != nth_prime
      if is_prime(number)
        index += 1
        nth_prime_found = number
      end
      number += 1
    end
    nth_prime_found
  end

  def self.is_prime(num)
    (2..Math.sqrt(num).to_i).each { |n| return false if num % n == 0 }
    true
  end
end
