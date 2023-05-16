//import {setTimeout} from "timers/promises";
console.log('Hello World');

const product = (a, b) => a*b;

console.log(product(2,3));

const student = {
    name: 'Ashwini',
    age: 35,
    greet() {
        console.log('Hi, I am '+this.name);
    }
}
student.greet();

let a = 5;

var b = 6;



console.log(this.b);

console.log(window.b)

console.log(window.a)

console.log(this.a);


const fruits =['apple', 'oranges', '', 'mangoes','','lemon'];
console.log(fruits.map((fruit) => {
    if(fruit.length == 0)
        return 'empty string';
     else
        return fruit;
}));



const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1
key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)


console.log('a');

console.log('b');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const p1 = delay(3000);
p1.then(() => {
  console.log('c');
  delay(0).then(() => {
    console.log('d');
    console.log('e');
  })
})


async function print() {
  try {
    await delay(3000)
    console.log('c');
    await delay(0);
    console.log('d');
    console.log('e');
  
  }
  catch  {
    console.log('error');
  }
}

print();

 