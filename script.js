// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding greet method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function that inherits from Person
function Employee(name, age, jobTitle) {
  // Call the parent constructor using 'call' to set the context
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Adding jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Cypress test code
cy.stub(win.console, "log").as("consoleLog");

// Create instances of Person and Employee
const person = new Person("Alice", 25);
const employee = new Employee("Bob", 30, "Manager");

// Call the greet and jobGreet methods
person.greet();
employee.jobGreet();
