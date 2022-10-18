//understanding prototype
function User(email, name) {  //fct are obj and they can have properties and methods
    this.email = email;
    this.name = name;
    this.online = false;
    //the method is returning smtg that's being saved in a variable
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}

//every REAL fct has a prototype : basically all its methods and properties
//so if someone creates obj out of it, those things will still be available
var uno = new User('sdjkf@dfd.ca', 'jojo'); //when using new, the constructor will be called

uno.login(); //in the function directly

//if you wanna add more methods to the prototype
User.prototype.logout = function(){
    this.online = true;
    console.log(this.email, 'has logged out');
}
uno.logout(); //this is in the proto bc pointing towards prototype
console.log(uno);

var Employee = function(email, name, title) {
	User.call(this, email, name);
	this.title = title;	
};
Employee.prototype = Object.create(User.prototype); //gives access to its own _proto_
Employee.prototype.constructor = Employee ; //w/o it Employee _proto_ pointing
//towards Users which points towards Object that contains the methods
//so this removes the "Object" now
var e1 = new Employee("XYZ", "ABC", "He"); //here e1 didnt get the _proto_ pointing towards Employee
console.log(e1);
console.log(Employee);
console.log( Object.getPrototypeOf(e1) );
hello();
function hello(){
    var proto = Object.getPrototypeOf(e1); //will only give you the stuff saved in proto
    console.log(proto)
    for(index in e1){
        //gives the values in the obj
        console.log(e1[index]);
        console.log(proto[index])
        if((index in proto)&& typeof(e1[index != "function"])){

            console.log(index);
        }
       
    }
}


var ola = new hello();

console.log(ola);

