"use strict";
for (let i = '#'; i.length <= 7; i += '#') {
    console.log(i);
}
//別解
// 任意の回数繰り返す
const loopingTriangle = (times) => {
    for (let i = '#'; i.length <= times; i += '#') {
        console.log(i);
    }
};
loopingTriangle(10);
