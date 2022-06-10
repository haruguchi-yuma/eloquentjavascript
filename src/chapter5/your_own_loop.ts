type TestFn = (n: number) => boolean
type UpdateFn = (n: number) => number
type BodyFn = (n: number) => void

const loop = (n: number, test: TestFn , update: UpdateFn, body: BodyFn) => {
  while (test(n)) {
    body(n)
    n = update(n)
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

loop(0, n => n < 11, n => n + 2, console.log)

{ // forループ
  const loop = (n: number, test: TestFn , update: UpdateFn, body: BodyFn) => {
    for (let i = n; test(i) ; i = update(i)) {
      body(i)
    }
  }
}
