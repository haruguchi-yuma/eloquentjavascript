class MultiplicatorUnitFailure < StandardError
end

def primitive_multiply(a, b)
  rand < 0.2 ? a * b : raise(MultiplicatorUnitFailure.new("klunk"))
end

def reliable_multiply(a, b)
  begin
    primitive_multiply(a, b)
  rescue => e
    if e.class == MultiplicatorUnitFailure
      retry
    else
      e.message
    end
  end
end

puts reliable_multiply(8, 8)
