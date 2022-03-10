def every(ary, &block)
  result = true
  ary.each do |a|
    break result = false  unless block.call(a)
  end
  result
end

puts every([2, 4, 6]) { _1 > 3 }
