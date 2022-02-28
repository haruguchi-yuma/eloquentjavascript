for(let row = '#'; row.length <= 7; row += '#') {
  console.log(row)
}

// 任意の回数実行できるようにした
const loopingTriangle = times => {
  for(let row = '#'; row.length <= times; row += '#') {
    console.log(row)
  }
}
