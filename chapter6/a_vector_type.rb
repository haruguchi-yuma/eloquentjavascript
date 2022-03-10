class Vec
  attr_reader :x, :y

  def initialize(x, y)
    @x = x
    @y = y
  end

  def plus(vector)
    Vec.new(x + vector.x, y + vector.y)
  end

  def minus(vector)
    Vec.new(x - vector.x, y - vector.y)
  end

  def length
    Math.sqrt(x ** 2 + y ** 2)
  end
end

vec1 = Vec.new(3, 4)
vec2 = Vec.new(2, 5)

p vec1.plus(vec2)
p vec2.minus(vec1)

p vec1.length
