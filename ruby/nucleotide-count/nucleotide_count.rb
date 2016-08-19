class Nucleotide
  NUCLEOTIDES = %w(A C G T).freeze

  def self.from_dna(strand)
    new(strand)
  end

  def initialize(strand)
    raise ArgumentError if /[^#{NUCLEOTIDES.join("")}]/.match(strand)
    @strand = strand
  end

  def count(nucleotide)
    @strand.count(nucleotide)
  end

  def histogram
    Hash[NUCLEOTIDES.map{ |n| [n, @strand.count(n)] }]
  end

end

module BookKeeping
  VERSION = 3
end
