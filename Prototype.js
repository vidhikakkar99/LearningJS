//understanding prototype
function User(email, name) {  //fct are obj and they can have properties and methods
    this.email = email;
    this.name = name;
    this.online = false;
    var hello = "";
    //the method is returning smtg that's being saved in a variable
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}

//every REAL fct has a prototype : basically all its methods and properties
//so if someone creates obj out of it, those things will still be available
var uno = new User('sdjkf@dfd.ca', 'jojo'); //when using new, the constructor will be called

uno.login(); //in the function directly
uno.hello

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

function Stupid(){}
Stupid.prototype.karo = function(){
    return this;
}
var s1 = new Stupid();
console.log(s1.karo); //this will show you the function kaise dikhta hai
console.log(s1.karo()); //will return the OG sequelette

var see = s1.karo;
console.log(see());

// Fermeture qui maintient un pointeur vers la fonction englobante
// Attention: cet exemple ne montre pas une bonne utilisation de
// la sauvegarde du pointeur "this" (dans la variable "that").
// De plus, l'utilisation de this et that est erronée ici.
function MultiCounter(initial) {
    var that = this; //fct itself
    var val = [];	
    console.log(this);
    this.init = function() {
	val = [];
	for (var i=0; i<initial.length; i++) {
	    val.push(  initial[i] );
	};
    };
    this.init();
    return {
	increment: function(i) { val[i] += 1; },
	resetAll: function() { that.init() }, //let me access the this.init
	getValues: function() { return val; }
    };
};

var m = MultiCounter( [1, 2, 3] );
m.resetAll();
console.log(m.getValues());


var popup = function(name) {
	var foo = alert;
	return function(e) {
		console.log(this);
		foo(name + " : " + e.target);
	}
};

window.onload = function() {
	alert("Le document a fini de charger!");
	var setupBtn = document.getElementById("reset");
	var runBtn = document.getElementById("increment");
	var doneBtn = document.getElementById("done");
	setupBtn.addEventListener( "click", popup("setup"), false);
	runBtn.addEventListener( "click", popup("increment"), false);
	doneBtn.addEventListener( "click", popup("done"), false);
}

var m ={
    a:5,
    calculate: function(){
        return this.a;
    }
}

m.calculate=function(b){
    console.log(0*b);
}
m.calculate=function(b,c){
    console.log('0*b');
}

var point1 = {x:20,y:15};
var point2 = {x:1,y:1};

var substract = function(pt){
    return {
      x:pt.x-this.x,
      y:pt.y-this.y
    };
  }
console.log(point1-point2 --> {x:19,y:14});
