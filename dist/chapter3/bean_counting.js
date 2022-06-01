"use strict";
const countBs = (str) => [...str].filter(s => s === 'B').length;
const countChar = (str, target) => [...str].filter(s => s === target).length;
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
{ // countBsの書き換え
    const countBs = (str) => countChar(str, 'B');
    console.log(countBs("BBC"));
}
