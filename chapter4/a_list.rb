def array_to_list(ary)
  list = nil
  ary.reverse_each do |value|
    list = {value: , rest: list}
  end
  list
end

array_to_list([1, 2, 3])

def list_to_array(list)
  ary = []
  loop do
    ary.push(list[:value])
    list = list[:rest]
    break unless list
  end
  ary
end

p list_to_array(array_to_list([1, 2, 3]))

def prepend(value, list)
  {value:, rest: list}
end

def nth(list, num)
  if num == 0
    list[:value]
  elsif !list
    list
  else
    nth(list[:rest], num -1)
  end
end
