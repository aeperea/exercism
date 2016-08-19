class Raindrops
  def self.convert(num)
    text = ""
    text += "Pling" if num % 3 == 0
    text += "Plang" if num % 5 == 0
    text += "Plong" if num % 7 == 0
    return text if text != ""
    return num.to_s
  end
end

module BookKeeping
  VERSION = 2
end
