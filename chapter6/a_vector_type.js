class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(vector) {
    return new Vec(
      this.x + vector.x,
      this.y + vector.y
      )
  }

  minus(vector) {
    return new Vec(
      this.x - vector.x,
      this.y - vector.y
    )
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
}

let vec1 = new Vec(3, 4)
let vec2 = new Vec(1, 2)

console.log(vec1.plus(vec2))
console.log(vec2.minus(vec1))

console.log(vec1.length)
console.log(vec2.length)


