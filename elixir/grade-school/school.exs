defmodule School do

  def add(db, name, grade) do
    Map.update(db, grade, [name], &([name | &1]))
  end

  def grade(db, grade) do
    Map.get(db, grade) || []
  end

  def sort(db) do
    Map.keys(db)
    |> Enum.map(&( {&1, Enum.sort(grade(db, &1))} ))
  end

end
