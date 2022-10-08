//how to make an Object: can have properties and methods
var user1 = {
    email: 'user1@gmail.com',
    name: 'Riya',
    login(){
        console.log('hello' + this.email + ' ' + this.name)
    }
}

console.log(user1.login());

//can change name with both ways
user1.name = 'bhai';
user1['name'] = 'rahul';
var hjb = user1['n']; // undefined

//add new properties and methods
user1.age = 25;
user1.printAge = function(){
    console.log('hola Hola');
}

//making classes-----can do the methods just as in objects
class User2  {
    constructor(email, name){
        this.email=email;
        this.name=name;
    }
}

//calling the constructor fct in arguments
var test1 = new User2('dakhfsf@sjkd.ca', 'bob');
var test2 = new User2('dakhfsf@sjkd.ca', 'jaan');

console.log(test1);
console.log(test2.name);