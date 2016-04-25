
//learning objects
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a " + job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job ="Super programmer";

// consoles james' second job
james.sayJob();


//creating other objects

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}


function search (lastname) {
    
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength ; i++){
        if (contacts[i].lastName === lastname) {
            printPerson(contacts[i]);
        }
    }
}