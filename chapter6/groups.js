class Group {
  constructor() {
    this.values = []
  }

  add(value) {
    if (!this.has(value)) {
      return this.values.push(value)
    }
  }

  delete(value) {
    let index = this.values.indexOf(value)
    if (index !== -1) {
      return this.values.splice(index, 1)
    }
  }

  has(value) {
    return this.values.includes(value)
  }

  static from(element) {
    const group = new Group
    for (ele of element) {
      group.add(ele)
    }
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

