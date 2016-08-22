class Array
  def accumulate
    res = []
    each { |i| res << (yield i) }
    res
  end
end
