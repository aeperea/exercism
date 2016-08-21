class RunLengthEncoding
  def self.decode(data)
    decoded_data = ""
    cache = ""
    data.chars.each do |char|
      if is_number(char)
        cache << char
      else
        decoded_data << char * (cache.to_i - 1) unless cache.empty? || cache == "1"
        decoded_data << char
        cache = ""
      end
    end
    decoded_data
  end

  def self.encode(data)
    encoded_data = ""
    cache = data[0]
    data.chars.each_with_index do |char, i|
      next if i == 0
      cache << char if cache[0] == char
      if cache[0] != char
        encoded_data << add_according_to_cache(cache)
        cache = char
      end
    end
    encoded_data << add_according_to_cache(cache)
    encoded_data
  end

  def self.is_number(str)
    !(str =~ /[0-9]/).nil?
  end

  def self.add_according_to_cache(cache)
    to_add = ""
    cache.size > 1 ? to_add << cache.size.to_s << cache[0] : to_add << cache[0]
    to_add
  end

end

module BookKeeping
  VERSION = 2
end
