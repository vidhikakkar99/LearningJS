function Tag (){

}

function ImageTag (src){
    Tag.call(this);
    this.src = src;
}

function TitleTag (level, title){
    Tag.call(this);
    this.level = level;
    this.title = title;
}

ImageTag.prototype = Object.create(Tag.prototype); 
ImageTag.prototype.constructor = Tag; 

TitleTag.prototype = Object.create(Tag.prototype); 
TitleTag.prototype.constructor = Tag; 

//returns the entire img tag with the src given
ImageTag.prototype.html = function (){
 return `<img src = ${this.src}></img>`
}

//to access any the champs of any prototype == use this alwaysssssss
TitleTag.prototype.html = function (){
    return `<h${this.level}>${this.title}</h${this.level}>`
   }

var img = new ImageTag("myimage.png");
var title = new TitleTag("Bienvenue sur ma page");

//-------------------------ES6----------------------------------

class Tag1 { // Définit une "fonction constructor Car"
    constructor () {
     }
}

class ImageTag1 extends Tag1 {
    constructor (src) {
        super () ;
        this.src = src;
    }
    html() {
        return `<img src = ${this.src}></img>`;
    }
}

class TitleTag1 extends Tag1 {
    constructor (level, title) {
        super () ;
        this.level = level;
        this.title = title;
    }
    html() {
        return `<h${this.level}>${this.title}</h${this.level}>`;
    }
}
//hasOwnProperty() --> to check if that specific obj owns that property like its in its own proto
Object.prototype.printInheritedFunctions = function() { 
    for (var k in this)
     { if (typeof(this[k]) == "function" && this.hasOwnProperty(k) == false) { 
        console.log(k); // ou console.log(this[k]) 
    } 
    }
} 

// Exemple d'invocation: 
var foo = function() { console.log("Time: " + Date.now()); } 
invoke( foo, 2000 /* initial */, 700 /* interval */);


function invoke(f, initial, interval){
    
    if(initial >= 0){
        setTimeout(runProgram,initial);
    }

  
    function runProgram(){
        f();
        if(initial >= 0){
            initial = initial-interval;
        }

        setTimeout(runProgram, initial);
    }

}

