// Cypress test code
cy.stub(win.console, "log").as("consoleLog");
person.greet();
cy.get("@consoleLog").should("be.calledWith", `Hello, my name is Alice, I am 25 years old.`); // Updated assertion
employee.jobGreet();
cy.get("@consoleLog").should("be.calledWith", `Hello, my name is Bob, I am 30 years old, and my job title is Manager.`); // Updated assertion
