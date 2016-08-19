class Gigasecond
  def self.from(time)
    time + 1e9.to_i
  end
end

module BookKeeping
  VERSION = 3
end
