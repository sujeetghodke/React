const num = parseInt(prompt("Enter the number between 0-10 "));

const randomNumber = Math.random() * 10;
// console.log(randomNumber);

const Number = Math.floor(randomNumber);

console.log("Random number is ", Number);

if (num === Number) {
  console.log(`You guessed the number correctly ${num}`);
} else {
  console.log(`You loss the number is ${Number}`);
}
