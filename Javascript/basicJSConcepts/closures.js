
function outerFunction() {
    let outerVariable = 'Hello';
  
    function innerFunction() {
      let innerVariable = 'World';
      // Arrow function capturing variables from outer scope
      const closureFunction = () => {
          console.log(`${this.outerVariable} ${innerVariable}`);
      };
      closureFunction();
    }
    innerFunction();
  }
//   outerFunction();
  

function outer(){
    let a = 10;
    function inner(){
        let b = a +3;
        console.log({b,this:this});
    }
    inner();
}
// outer();



function a(){
    let z = 100;
    return function(){
        let x = 45;
        console.log(x,z);
    }
}
// a()();


function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  const person1 = new Person('John', 25);
  const person2 = new Person('Jane', 30);
  
  person1.sayHello(); // Output: Hello, my name is John and I am 25 years old.
  person2.sayHello(); // Output: Hello, my name is Jane and I am 30 years old.
  

