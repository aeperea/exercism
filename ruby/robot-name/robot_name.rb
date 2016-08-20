class Robot
  attr_reader :name
  @names_list = []

  def initialize
    reset
  end

  def reset
    @name = generate_name
  end

  def generate_name
    Kernel.srand
    new_name = [*("A".."Z")].sample(2).join << rand(1000).to_s

    if self.class.names_list.include?(new_name)
      generate_name
    else
      self.class.names_list << new_name
    end
    new_name
  end

  def self.names_list
    @names_list
  end

end

module BookKeeping
  VERSION = 2
end
