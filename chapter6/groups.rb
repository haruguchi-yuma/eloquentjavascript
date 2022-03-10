class Group
  attr_reader :numbers

  def initialize
    @numbers = []
  end

  def add(number)
    numbers << number if !has(number)
  end

  def delete(number)
    numbers.delete_if { _1 == number}
  end

  def has(number)
    numbers.include?(number)
  end

  def self.from(ary)
    group = new
    Range.new(*ary).each do |num|
      group.add(num)
    end
    group
  end
end

group = Group.from([10, 20])
p group.has(10)
p group.add(10)
group.delete(10)
p group.has(10)
