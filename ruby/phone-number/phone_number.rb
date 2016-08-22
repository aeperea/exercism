class PhoneNumber
  attr_reader :number, :area_code

  def initialize(str)
    @number    = get_number(str)
    @area_code = get_area_code
  end

  def to_s
    "(#{area_code}) #{@number[3..5]}-#{@number[6..9]}"
  end

  private
  def get_number(str)
    phone_num = str.gsub(/[\(\) -\.]/,'')
    bad_num   = "0000000000"
    size = phone_num.length
    return bad_num          unless has_only_numbers(phone_num)
    return phone_num[1..10] if size == 11 && phone_num[0] == "1"
    return phone_num        if size == 10
    bad_num
  end

  def get_area_code
    @number[0..2]
  end

  def has_only_numbers(phone)
    !(phone =~ /^[0-9]+$/).nil?
  end
end
