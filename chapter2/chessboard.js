const chessboard = (size = 8) => {
  line = ''
  for(let i = 1; i <= size; i++) {
    for(let j = 1; j <= size; j++) {
      if ((i + j) % 2 === 0) {
        line += ' '
      } else {
        line += '#'
      }
    }
    if (i !== size) line += "\n" 
  }
  console.log(line)
}

chessboard()


// 別解
const chessboard2 = (size = 8) => {
  line = ' #'.repeat(size)
  for(let i = 0; i < size; i++) {
    console.log(line.substring(i, size + i))
  }
}

chessboard2()
