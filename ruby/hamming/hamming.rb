class Hamming
  def self.compute(strand_a, strand_b)
    raise ArgumentError unless strand_a.size == strand_b.size
    strand_a.split("").each_with_index.count { |nucl_a, index| nucl_a != strand_b[index] }
  end
end
