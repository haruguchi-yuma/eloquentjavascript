for (let i: string = '#'; i.length <= 7; i += '#') {
  console.log(i);
}

//別解
// 任意の回数繰り返す

const loopingTriangle = (times: number) => {
  for (let i: string = '#'; i.length <= times; i += '#') {
    console.log(i);
  }
}

loopingTriangle(10);
