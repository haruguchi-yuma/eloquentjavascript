class Group<T> {
  values: T[];

  constructor() {
    this.values = [];
  }

  static from(obj: any) {
    const group = new Group()
    for (const ele of obj) {
      group.add(ele);
    }
    return group;
  }

  add(value: T): void {
    if (!this.has(value)) {
      this.values = [...this.values, value]
    }
  }

  delete(value: T): void {
    this.values = this.values.filter(v => v !== value)
  }

  has(value: T): boolean {
    return this.values.includes(value);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
