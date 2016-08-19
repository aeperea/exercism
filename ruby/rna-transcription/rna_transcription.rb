class Complement
  NUCLEOTIDES = "ACGT"
  TRANSMAPS   = "UGCA"

  def self.of_dna(strand)
    return "" if /[^#{NUCLEOTIDES}]/.match(strand)
    strand.tr(NUCLEOTIDES, TRANSMAPS)
  end
end

module BookKeeping
  VERSION = 4
end
