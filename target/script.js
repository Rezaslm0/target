// start to find objects
let string = "Hi my name is reza",
  target = "reza";
//Is the following true or not
if (string.includes(target) == true) {
  console.log(`${target} nice to meet you`);
} else {
  console.log(`${target} your account does not exist`);
}