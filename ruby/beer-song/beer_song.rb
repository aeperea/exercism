class BeerSong
  def verse(n)
    "#{first_line(n)}\n#{second_line(n)}\n"
  end

  def first_line(n)
    if n == 0
      "No more bottles of beer on the wall, no more bottles of beer."
    elsif n == 1
      "1 bottle of beer on the wall, 1 bottle of beer."
    else
      "#{n} bottles of beer on the wall, #{n} bottles of beer."
    end
  end

  def second_line(n)
    if n == 0
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    elsif n - 1 == 0
      "Take it down and pass it around, no more bottles of beer on the wall."
    elsif n - 1 == 1
      "Take one down and pass it around, 1 bottle of beer on the wall."
    else
      "Take one down and pass it around, #{n-1} bottles of beer on the wall."
    end
  end

  def verses(from = 99, til = 0)
    (til..from).to_a.reverse.map{ |i| verse(i) }.join("\n")
  end

  def lyrics
    verses
  end

end

module BookKeeping
  VERSION = 2
end
