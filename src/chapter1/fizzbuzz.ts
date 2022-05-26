const fizzbuzz = (n: number): void => {
  [...new Array(n).keys()].map((n) => n + 1).forEach((n) => {
    if (n % 15 === 0) console.log('FizzBuzz')
    else if (n % 3 === 0) console.log('Fizz')
    else if (n % 5 === 0) console.log('Buzz')
    else console.log(n)
  })
}

fizzbuzz(100)

{ //別解
  const fizzBuzz = (n: number): void => {
    [...new Array(n).keys()].map((n) => n + 1).forEach((n) => {
      let result: string = ''
      if (n % 3 === 0) result += 'Fizz'
      if (n % 5 === 0) result += 'Buzz'
      console.log(result || n)
    })
  }
  fizzBuzz(100)
}
