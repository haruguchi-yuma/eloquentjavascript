for(let n = 1; n <= 100; n++) {
  if (n % 15 === 0) {
    console.log('FizzBuzz')
  } else if (n % 3 === 0) {
    console.log('Fizz') 
  } else if (n % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(`${n}`)
  }
}

// 模範解答
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// 始まりと終わりを指定できるようにした
const fizzBuzz = (start, end) => {
  for(let n = start; n <= end; n++) {
    if (n % 15 === 0) {
      console.log('FizzBuzz')
    } else if (n % 3 === 0) {
      console.log('Fizz') 
    } else if (n % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(`${n}`)
    }
  }
}
