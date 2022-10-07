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