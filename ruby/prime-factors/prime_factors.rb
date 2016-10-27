class PrimeFactors
  def self.for(n)
    primes = []
    (2..n).each do |i|
      while n % i == 0 do
        primes.push(i)
        n /= i
      end
      break if i >= n
    end
    primes
  end
end
