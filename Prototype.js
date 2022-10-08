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