var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// let you can re-asign values to it
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// let you can NOT re-asign values to it
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping
const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log('first name',firstName);
  console.log('full name',fullName);
}

console.log(firstName);