{
  // 負の数未対応
  const isEven = n => {
    if (n === 0) {
      return true
    } else if( n === 1) {
      return false
    } else if ( n > 1) {
      return isEven(n-2)
    }
  }
}
// 負の数にも対応
{
  const isEven = n => {
    if (n === 0) return true
    else if (n === 1) return false
    else if (n < 0) return isEven(-n)
    else if (n > 1) return isEven(n)
  }
}

// 再帰ではなく2進数を使う
const isEven = n => (n & 1) == 0

