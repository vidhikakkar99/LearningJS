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

//add new properties and methods
user1.age = 25;
user1.printAge = function(){
    console.log('hola Hola');
}