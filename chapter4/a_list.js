const arrayToList = arr => {
  let list = {value: arr[arr.length - 1], rest: null};

  for (let i = arr.length - 2; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

console.log(arrayToList([1, 2, 3]))

const listToArray = list => {
  const arr = [];
  for(let node = list; node !== null; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

console.log(listToArray({value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}))

const prepend = (value, list) => {
  return {value , rest: list}
}

const nth = (list, num) => {
  if (num === 0) return list.value
  for (let i = 1; i <= num; i++) {
    if (list.rest === null) return undefined
    if (i === num) return list.value
    list = list.rest
  }
}

console.log(nth(arrayToList([10, 20, 30]), 8))

// 模範解答　こっちの方がよかった
{
  const arrayToList = arr => {
    let list = null;
    for(let i = arr.length - 1; i >= 0; i--) {
      list = {value: arr[i], rest: list};
    }
    return list;
  }
  console.log(arrayToList([1, 2, 3, 4]))

  const nth = (list, n) => {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
}
