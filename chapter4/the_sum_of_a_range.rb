def range(start, last, step = start < last ? 1 : -1)
  if start > last
    start, last = last, start
    start.step(last, step).to_a.reverse
  else
    start.step(last, step).to_a
  end
end

def sum(array)
  total = 0
  array.each do |n|
    total += n
  end
  total
end

## 畳み込み演算
def sum(array)
  array.inject(:+)
end

p range(10, 3, -1)
p range(2, 10, 3)
p sum(range(1, 10))
