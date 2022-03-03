def looping(val, test, update, body)
  while test.call(val)
    body.call(val)
    val = update.call(val)
  end
end

test_proc = ->(n) { n > 0}
body_proc = ->(n) { puts n}
update_proc = ->(n) { n -= 1}

looping(3, test_proc, update_proc, body_proc)
