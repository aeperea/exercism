defmodule RNATranscription do
  @dna_maps %{?G => ?C, ?C => ?G, ?T => ?A, ?A => ?U}

  def to_rna(dna) do
    dna |> Enum.map(&(@dna_maps[&1]))
  end

end
