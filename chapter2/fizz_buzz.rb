(1..100).each do |n|
  puts output =
    if n % 15 == 0
      'FizzBuzz'
    elsif n % 3 == 0
      'Fizz'
    elsif n % 5 == 0
      'Buzz'
    else
      n.to_s
    end
end

# 始まりと終わりを指定できるようにした
def fizz_buzz(start, last)
  (start..last).each do |n|
    puts output =
      if n % 15 == 0
        'FizzBuzz'
      elsif n % 3 == 0
        'Fizz'
      elsif n % 5 == 0
        'Buzz'
      else
        n.to_s
      end
  end
end


