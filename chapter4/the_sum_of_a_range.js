const range = (start, end) => [...new Array(end - start + 1).keys()].map(n => n + start)

const sum = arr => arr.reduce((acc, value) => acc + value)

console.log(range(1, 10))
console.log(sum(range(1, 10)))

// モブプロしたやつ
{
  const range = (start, end, step = start < end ? 1 : -1) => {
    let result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else if (step < 0) {
      for(let i = start;i >= end; i += step) {
        result.push(i)
      }
    }
    return result
  }
}

{
  const range = (start, end, step = start < end ? 1 : -1) => {
    if (step === 0 || (end - start) * step < 0) return []
    return [...new Array(Math.ceil(((Math.abs(end - start) + 1) / Math.abs(step)))).keys()].map(n => n * step + start)
  }
}

// 上のやつを読みやすくしたやつ

{
  const range = (start, end, step = start < end ? 1 : -1) => {
    if (step === 0 || (end - start) * step < 0) return [];
    const size = Math.ceil((Math.abs(end - start) + 1) / Math.abs(step));
    return [...new Array(size).keys()].map(n => n * step + start);
  }
}
