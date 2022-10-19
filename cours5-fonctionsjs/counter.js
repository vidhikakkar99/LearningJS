// Fonction Adder pour exemplifier les fermetures
function Adder(val) {
    var value = val;
    return function(inc) {
	value = value + inc;
	return value;
    }
};

var f = Adder(5);
console.log( f(3) );
console.log( f(5) );

var f2 = Adder(100);
console.log( f2(2) );
console.log( f2(3) );

console.log( f(1) );

// Fermeture Counter qui retourne un objet
function Counter(initial) {
    var val = initial;
    return {	
	increment : function() { val += 1; },
	reset: function() { val = initial; },
	get: function() { return val; }
    };
};

var f = Counter(5), g = Counter(10);
f.increment();
g.increment();
f.reset();
f.increment();
g.increment();
console.log( f.get() + "," + g.get() );

// Fermeture qui maintient un pointeur vers la fonction englobante
// Attention: cet exemple ne montre pas une bonne utilisation de
// la sauvegarde du pointeur "this" (dans la variable "that").
// De plus, l'utilisation de this et that est erronée ici.
function MultiCounter(initial) {
    var that = this;
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
	resetAll: function() { that.init(); },
	getValues: function() { return val; }
    };
};

// Version améliorée qui utilise le this/that correctement
// pour stocker une référence vers le "this" de l'objet externe
var MultiCounter2 = {

    create: function(initial) {
	
	var that = this;
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
	    resetAll: function() { that.init(); },
	    getValues: function() { return val; }
	};
	
    }
};

var m = MultiCounter( [1, 2, 3] );
//m = MultiCounter2.create( [1, 2, 3] );
m.increment(0);
m.increment(2);
m.increment(0);
m.resetAll();
m.increment(1);
console.log( m );
console.log( m.getValues() );

// Cet exemple est erroné!
function MakeCounters2(n) {
    var counters = [];
    for (var i=0; i<n; i++) {
	var val = i;
	counters[i] = {
	    increment: function() { val++; },
 	    get: function() { return val; },
	    reset: function() { val = i; }
	}
    }
    return counters;
};

// Cet exemple résoud le problème, mais ajoute des champs additionels à l'objet compteur
function MakeCounters1(n) {
    var counters = [];
    for (var i=0; i<n; i++) {
	counters[i] = {
	    val : i,
	    initial : i,
	    increment: function() { this.val++; },
 	    get: function() { return this.val; },
	    reset: function() { this.val = this.initial; }
	}
    }
    return counters;
};

// Solution à l'exercice en classe qui corrige le défaut de la solution précédente
function MakeCounters(n) {
    var counters = [];
    for (var i=0; i<n; i++) {
	counters[i] = function( ) {
	    var initial = i, val = initial;
	    return {	
		increment: function() { val++; },
 		get: function() { return val; },
		reset: function() { val = initial; }
	    }
	}();	// Don't forget to call the function
    }
    return counters;
};
	
var m = MakeCounters(10);
for (var i=0; i<10; i++) {
    console.log(m[i]);
    console.log("Counter[ " + i + "] = " + m[i].get());
}

// Exemple d'une fonction d'ordre supérieur
var map = function( array, fn ) {
    // Applique fn à chaque élément de la liste, retourne une nouvelle liste
    var result = [];
    for (var i = 0; i < array.length; i++) {
	var element = array[i];
	var args = [ element ];
	result.push( fn.apply(null, args) );
    }
    return result;
};

var l = [3, 1, 5, 7, 2];
console.log( map(l, function(num) { return num + 10; }) );

var add = function(a, b) {
    return a + b;
};

// Exemple de curryfication
var add10 = add.bind(null, 10); 
console.log( map(l, add10) )

// Solution à l'activité en classe pour la fonction filter
// Solution to the class activity for the filter function is below;
var filter = function( array, fn ) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        var args = [ element ];
        if (fn.apply(null, args) ) result.push(element); 
        //if (fn(element) ) result.push(element); 
    }
    return result;
};

var divisibleBy = function(d, x) { return (Number.isInteger(x/d)) }; 
var isPair = divisibleBy.bind(null, 2);

var a = [ 1, 3, 10, 8, 2, 7, 6 ];
var c = filter( a, isPair);
console.log(c);

// Autre exemple
var lesserThan = function(a, b) { return (a < b) ? true:false; } 
var greaterThan5 = lesserThan.bind(null, 5);
var c = filter( a, greaterThan5);
console.log(c);
