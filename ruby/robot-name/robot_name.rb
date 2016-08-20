class Robot
  attr_reader :name

  def initialize
    reset
  end

  def reset
    @name = generate_name
  end

  def generate_name
    (0..1).map {('A'..'Z').to_a[rand(26)]}.join <<
    (0..2).map {(0..9).to_a[rand(10)]}.join
  end

end

module BookKeeping
  VERSION = 2
end
