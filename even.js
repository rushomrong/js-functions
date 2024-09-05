function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      sum = sum + number;
    }
  }
  return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log("Some of even number is", sum);
