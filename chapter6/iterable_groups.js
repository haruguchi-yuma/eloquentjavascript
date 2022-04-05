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
    for (const e of element) {
      group.add(e)
    }
    return group
  }

  [Symbol.iterator]() {
    return new GroupIterator(this)
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group
    this.index = 0
  }

  next() {
    if (this.index == this.group.values.length) {
      return {done: true}
    } else {
      const result =  {
        value: this.group.values[this.index],
        done: false
      }
      this.index++
      return result
    }
  }
}

for (let value of Group.from(["a", "b", "c", "a"])) {
  console.log(value);
}

