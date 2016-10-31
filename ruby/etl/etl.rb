class ETL
  def self.transform(old_hash)
    old_hash.reduce({}) do |new_hash, (score, letters)|
      letters.each do |letter|
        new_hash[letter.downcase] = score
      end
      new_hash
    end
  end

end
