def min(a, b)
  a < b ? a : b
end

# 可変長引数に対応
def min(*nums)
  nums.inject { |a, b| a < b ? a : b }
end

puts min(1, 2, -3)
