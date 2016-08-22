class SumOfMultiples
  def initialize(*args)
    @args = args.sort
  end

  def to(limit)
    @args.map do |mult|
      if limit < mult
        0
      else
        (mult..limit-1).to_a.map do |n|
          n if n % mult == 0
        end
      end
    end.flatten.compact.uniq.reduce(:+)
  end
end
