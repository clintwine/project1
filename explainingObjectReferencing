function greet(){
	console.log("hi");
}


var c = {
	name: "The C Object",
	log1 : function() {
		console.log(this);
		var self = this;

		var setname = function(){
			console.log("This in setname \n" ,this);

			var lastentry = function(){
				console.log("This in lastentry \n" ,this);
			}

			lastentry();

		}

		setname();
	}
}

c.log1();


var d = [
	55,
	"A string",
	{name: "this",
	 age:34,
	 fun : function(){console.log("fun")},
	},
	function(name){
		console.log("My name is " + name);
		console.log(this);
	}
];


console.log(d);
console.dir(d);



//Primitive values are passed by value, but objects are passed by reference
//so when you create a primitive value, it creates a space in memory

var a = 5  //e.g creates memory space x1001 for 5 and a points to it
var b = a // it creates another memory space for b to point to e.g x1053 and copies the value of a into it

//hence we have 2 different memory slots containing the value 5

//but when create an object or array. the variable holds the location of the object

//e.g 
var e = [0,1,2];  // so for example [0,1,2] is located at memory x1048  while e is pointing to this reference in memory
var f = e;  // since e already points to address x1048, it gets f to point to this same array
console.log(f); //[0,1,2]
f[0] = 5;       //because this is referencing our array [0,1,2], it changes the first entry from 0 to 5
console.log(e); //[5,1,2]  as e is also pointing to the same address in memory which contains [5,1,2]

//now when we create a array in memory and points our previous variables to it, it does not affect the other one
//e.g

e = ["test", 6, true] //now we have a new array ["test", 6, true] created in memory e.g address x1100 and e now points to this address 
console.log(e);  //  Outputs ["test", 6, true]  as this points to the new address x1100
console.log(f);  //  Outputs [5,1,2] as this still points to (referencing) memory address x1048



//The same applies to Objects

var g = {var1: "test"}  //e.g creates memory space x15001 for object {var1: "test"} and g points to it
var h = g;				// since g already points to address x15001, it gets h to point to this same object
console.log(h); 		// Outputs {var1: "test"}

h.var1 = "test2";			
//because this is referencing our object {var1: "test"} at memory address x15001, it changes the var1 property to test2
console.log(g);         //Outputs {var1: "test2"}
console.log(h);         //Outputs {var1: "test2"}


//now we have a new object {var1: "test"} created in memory e.g address x16000 and g now points to this address 
g = {var2:'test5'};
console.log(g);  //Outputs {var2:'test5'}
console.log(h);  //Outputs {var2:'test2'}

//This because they are pointing at different memory addresses  h @ x15001 and g @ x16000

//when we pass arrays and objects to a function, it is by reference, hence modifying any of its property will mutate it
//e.g

function mutatingExample(obj){
	obj.var1 = "I have mutated";
}


console.log(g);  //Outputs {var2:'test5'} before running the mutating examples
mutatingExample(g);
console.log(g);  //Outputs {var2: "I have mutated" } after running the mutatingExample function

