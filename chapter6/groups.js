class Group {
  constructor() {
    this.numbers = []
  }

  add(number) {
    if (!this.has(number)) {
      return this.numbers.push(number)
    }
  }

  delete(number) {
    let index = this.numbers.indexOf(number)
    if (index !== -1) {
      return this.numbers.splice(index, 1)
    }
  }

  has(number) {
    return this.numbers.includes(number)
  }

  static from([start, end]) {
    const group = new Group
    const arr = [...new Array(end - start +1).keys()].map(n => n + start)
    arr.forEach(n => group.add(n))
    return group
  }
}

const group = Group.from([10, 20])
console.log(group.numbers)
group.add(10)
console.log(group.numbers)
console.log(group.has(10))
console.log(group.delete(10))
console.log(group.numbers)
console.log(group.has(10))

