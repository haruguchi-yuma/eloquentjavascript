const chessBoard = (size: number = 8) => {
  const str = ' #'.repeat(size)
  for (let i: number = 0; i < size; i++) {
    console.log(str.slice(i, size + i));
  }
};

{ //別解
  const chessBoard = (size: number = 8) => {
    let str = ''
    for (let i: number = 1; i <= size; i++) {
      for (let j: number = 1; j <= size; j++) {
        str += (i + j) % 2 === 0 ? ' ' : '#'
        if (j === size) str += '\n'
      }
    }
    console.log(str)
  }
}
