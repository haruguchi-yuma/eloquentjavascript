class Group
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
end

group = Group.from([10, 20])
p group.has(10)
p group.add(10)
group.delete(10)
p group.has(10)
