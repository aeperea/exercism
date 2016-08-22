defmodule DNA do
  @nucleotides [?A, ?C, ?G, ?T]

  def count(strand, nucleotide) do
    validate(strand, nucleotide)
    Enum.count(strand, &(&1 === nucleotide))
  end

  def histogram(strand) do
    @nucleotides |> Enum.map( &({&1, count(strand, &1)})) |> Enum.into(%{})
  end

  defp validate(strand, nuc) do
    validate_strand(strand)
    validate_nucleotide(nuc)
  end

  defp validate_strand(strand) do
    unless Enum.all?(strand, &validate_nucleotide(&1)), do: raise ArgumentError
    true
  end

  defp validate_nucleotide(nuc) do
    unless nuc in @nucleotides, do: raise ArgumentError
    true
  end


end
