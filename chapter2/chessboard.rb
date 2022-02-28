def chessboard(size: 8)
  str = ' #' * size
  size.times do |i|
    puts str[i..(size+i)]
  end
end

chessboard(size: 20)
