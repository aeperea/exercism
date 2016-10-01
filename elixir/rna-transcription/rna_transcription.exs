defmodule RNATranscription do

  @dna_maps %{67 => 71, 71 => 67, 65 => 85, 84 => 65}

  def to_rna(dna) do
    dna |> Enum.map(fn(nucl) ->(if @dna_maps[nucl], do: @dna_maps[nucl], else: nucl) end)
  end

end
