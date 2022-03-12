def reverse_array(ary)
  ary.each_with_object([]) { _2.unshift(_1) }
end

p reverse_array([1, 2, 3])

def reverse_array_in_place(ary)
  (ary.size / 2).times do |i|
    ary[i], ary[-1 - i] = ary[-1 - i], ary[i]
  end
  ary
end

p reverse_array_in_place([1, 2, 3, 4, 5, 6])
