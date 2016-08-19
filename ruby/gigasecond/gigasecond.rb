class Gigasecond
  def self.from(time)
    Time.at(time.to_i + 1e9.to_i)
  end
end

module BookKeeping
  VERSION = 3
end
