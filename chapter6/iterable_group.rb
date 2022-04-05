class Group
  include Enumerable
  attr_reader :values

  def initialize
    @values = []
  end

  def add(value)
    values << value if !has(value)
  end

  def delete(value)
    values.delete_if { _1 == value}
  end

  def has(value)
    values.include?(value)
  end

  def self.from(element)
    group = new
    element.each { group.add(_1) }
    group
  end

  def each
    values.each do
      yield(_1)
    end
  end
end

puts Group.from(['a', 'b', 'c']).map(&:upcase)
