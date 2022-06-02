{ // 引数2つだけのrange
  const range = (start: number, end: number) =>
    [...new Array(end - start + 1).keys()].map(n => n + start)
}

const range = (start: number, end: number, step: number = start < end ? 1 : -1) => {
  if (step === 0 || Math.abs(end - start) < Math.abs(step)) return [];
  const size = Math.ceil(Math.abs(end - start) + 1 / Math.abs(step));
  return [...new Array(size).keys()].map(n => n * step + start);
}

const sum = (nums: number[]) => nums.reduce((a, b) => a + b);

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// // → 55
