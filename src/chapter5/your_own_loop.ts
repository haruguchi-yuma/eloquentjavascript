type testFn = (n: number) => boolean
type updateFn = (n: number) => number
type bodyFn = (n: number) => void

const loop = (n: number, test: testFn , update: updateFn, body: bodyFn) => {
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
  const loop = (n: number, test: testFn , update: updateFn, body: bodyFn) => {
    for (let i = n; test(i) ; i = update(i)) {
      body(i)
    }
  }
}
