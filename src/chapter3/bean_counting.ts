const countBs = (str: string) =>
  [...str].filter(s => s === 'B').length;

const countChar = (str: string, target: string) =>
  [...str].filter(s => s === target).length;


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

{ // countBsの書き換え
  const countBs = (str: string) => countChar(str, 'B');
  console.log(countBs("BBC"));
}
