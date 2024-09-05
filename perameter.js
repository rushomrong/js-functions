/// 4 = 4 * 4 = 16

function square(number) {
  console.log("Value of the number parameter is", number);
  const borgo = number * number;
  console.log("Squre of the given number is", borgo);
}

// from out side of the function it will not work or display the parameter value
// console.log("Squre of the given number is", borgo);

square(4);

////////
// adding number using function

function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

add(10, 35);
