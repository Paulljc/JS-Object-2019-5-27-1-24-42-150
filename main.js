var user = {};
user.name = "John";
user.surname = "Mike";
console.log(user);
user.name = "Peter";
console.log(user);
delete user.name;
console.log(user);

var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
var count = 0;
for (const val in fruit) {
    if (fruit.hasOwnProperty(val)) {
        console.log(fruit[val]);
        count += fruit[val];
    }
}
console.log(count);
