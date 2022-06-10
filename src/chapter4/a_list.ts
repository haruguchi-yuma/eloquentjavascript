type List = {
  value: number,
  rest: null | List
} | null

const arrayToList = (arr: readonly number[]) => {
  let list: List= null

  for(let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

const listToArray = (list: List) => {
  const arr: number[] = [];
  for(let node: List = list; node !== null; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

const prepend = (value: number,list: List) => ({value, rest: list})

const nth = (list: List, num: number): number | undefined => {
  if (!list) return undefined;
  else if (num == 0) return list.value;
  else return nth(list.rest, num - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
