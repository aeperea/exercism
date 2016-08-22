class School
  def initialize
    @students_list = []
  end

  def add(name, grade)
    @students_list << {name: name, grade: grade}
  end

  def students(grade)
    @students_list.map { |s| s[:name] if s[:grade] == grade; }.compact.sort
  end

  def students_by_grade
    grades_available = @students_list.map { |s| s[:grade] }.uniq.sort
    grades_available.map { |grade| {grade: grade, students: students(grade)} }
  end

end

module BookKeeping
  VERSION = 3
end
