class Hamming
  def self.compute(strand_a, strand_b)
    raise ArgumentError unless strand_a.size == strand_b.size
    mismatches = 0
    strand_a.split(""). each_with_index { |nucl_a, index| mismatches += 1 unless nucl_a == strand_b[index] }
    mismatches
  end
end
