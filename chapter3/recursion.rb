# even?メソッドがもうあるのでis_even?メソッドとする
def is_even?(n)
  if n == 0
    true
  elsif n == 1
    false
  elsif n > 1
    is_even?(n-2)
  elsif n < 0
    is_even?(-n)
  end
end

# そもそも2進数の論理積を取れば再帰は不要
def is_even2?(n)
  n & 1 == 0
end
