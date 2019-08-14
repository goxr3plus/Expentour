//OBJECT DESTRUCTURING
const person = {
  age: 26,
  location: {
    city: "Philadelphia",
    temp: 92
  }
};

const { name: firstName = "Anonymous", age } = person;
const { city, temp: temperature } = person.location;

console.log(`1. ${firstName} is ${age}`);
console.log(`2. In ${city} is ${temperature} F`);

//ARRAY DESTRUCTURING
const address = ["1234 Street", "Philadelphia", "Pennsylvania"];
const [street, town, , zipCode = 32] = address;
console.log(`4. ${street} , ${town} , ${zipCode}`);
