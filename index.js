const users = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 30, isActive: false },
  { id: 3, name: "Charlie", age: 25, isActive: true },
  { id: 4, name: "Diana", age: 28, isActive: false },
  { id: 5, name: "Ethan", age: 35, isActive: true },
];

//filter => loc du lieu
const filterUser = users.filter((user) => {
  return user.age > 25;
});

//find => tim kiem 1 phan tu
const findUser = users.find((user) => {
  return user.age > 25;
});

//map => tao ra mang moi
const mapUser = users.map((user) => {
  return {
    ...user,
    name: `${user.name} edited`,
  };
});

//reduce => tinh toan
const reduceUser = users.reduce((acc, cur) => {
  return { ...acc, [cur.name]: cur };
}, {}); // acc: accumulator, cur: current value => acc = {}

const numbers = [1, 2, 11, 22];

const total = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log("Filter Users:", filterUser, "\n");
console.log("Find User:", findUser, "\n");
console.log("Map Users:", mapUser, "\n");
console.log("Reduce Users:", reduceUser, "\n");
console.log("Total of Numbers:", total, "\n");
