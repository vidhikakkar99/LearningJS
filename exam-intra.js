var Avion = function (moteurs, poids) {  
    this.moteurs = moteurs;
    this.poids = poids;
}

var AvionPassager= function(moteurs, poids, passagers) {
	Avion.call(this, moteurs, poids);
	this.passagers = passagers;	
};

AvionPassager.prototype = Object.create(Avion.prototype);
AvionPassager.prototype.constructor = AvionPassager;

var AvionMixte = function (moteurs, poids, passagers, cargos, tauxCargo) {
	AvionPassager.call(this, moteurs, poids, passagers,);
	this.cargos = cargos;	
    this.tauxCargo = tauxCargo;
};
AvionMixte.prototype = Object.create(AvionPassager.prototype);
AvionMixte.prototype.constructor = AvionMixte;

//same for avion et avionPassager
Avion.prototype.calculerCout = function(distance){
    return 500 + this.calculerGas()*50;
}

AvionMixte.prototype.calculerCout = function(distance){
    return 500 + this.calculerGas()*50 + this.cargos*this.tauxCargo;
}


Avion.prototype.calculerGas = function(distance){
    return (100*this.moteurs)+ (distance/this.poids/100);
}

AvionPassager.prototype.calculerGas = function(distance) {
	return (100*this.moteurs)+ (distance/this.poids/100)*(1+(this.passagers/100));
}

AvionMixte.prototype.calculerGas = function(distance) {
	return (250*this.moteurs) + (distance+this.cargos*7.5);
}

Avion.prototype.toString = function(){
    return 'nom:'+constructor.name + ' ' + 'quantite du gaz: '+this.calculerGas()+ 'cout du service:' +
    this.calculerCout();
}

class Avion { 
    constructor (moteurs, poids) {
     this.moteurs = moteurs;
     this.poids = poids;
     }
     calculerCout (distance) {
        return 500 + this.calculerGas()*50;
    }
    calculerGas(distance){
        return (100*this.moteurs)+ (distance/this.poids/100);
    }

    toString() {
        return 'nom:'+constructor.name + ' ' + 'quantite du gaz: '+this.calculerGas()+ 'cout du service:' +
        this.calculerCout();
    }
}

class AvionPassager extends Avion {
    constructor (moteurs, poids, passagers) {
        super (moteurs, poids) ;
        this.passagers = passagers;
    }
    calculerGas(distance) {
        return (100*this.moteurs)+ (distance/this.poids/100)*(1+(this.passagers/100));
    }
}

class AvionMixte extends AvionPassager {
    constructor (moteurs, poids, passagers, cargos, tauxCargo) {
        super (moteurs, poids, passagers, ) ;
        this.cargos = cargos;
        this.tauxCargo = tauxCargo;
    }

   calculerCout (distance){
        return 500 + this.calculerGas()*50 + this.cargos*this.tauxCargo;
    }
   calculerGas (distance) {
        return (250*this.moteurs) + (distance+this.cargos*7.5);
    }
}


function StockMarket(){
    var _stocksPrice={ APPL:0, AMZN:0, MSFT:0, 
        GOOGL:0, LNKD:0, META:0, GME:0 };
   var _userAccount

    var _init=function(){
        _changeStocksPrice();
        setInterval(this._changeStocksPrice.bind(this),3000);
    }

    var _processTransaction=function(user,stockName, qty, price){
        var account = this._userAccount[user];
        var userStockQty = account.stocks[stockName];
   
        if(userStockQty===undefined)
        userStockQty=0;

            account.amount += price;
            account.stocks[stockName]=userStockQty+qty;
        } 

    var _changeStocksPrice=function(){
        for (const key in this._stocksPrice) {
            this._stocksPrice[key] = Math.floor(Math.random() * 15000) /100;
        }
    }

    

    return{
        getUserStocks: function(user){
            return _userAccount[user]?.stocks;
          },
        getUserAmount:function(user){
            return _userAccount[user]?.amount;
        },
        getStocksPrice:function(){
            return _stocksPrice;
          },
        createAccount: function(user,money){
            if(_userAccount[user] !== undefined) throw new Error("That user already exist!")
            _userAccount[user]={ amount:money, stocks:{} };
          }, 
          buy: function(user,stockName, qty){
            var stockPrice=_stocksPrice[stockName];
            var userAccount=_userAccount[user];
            var userAmount=userAccount?.amount;
            var success=false;
        
            if(stockPrice!==undefined && userAmount!==undefined && qty*stockPrice<=userAmount){
              _processTransaction(user,stockName,qty,-qty*stockPrice);
              success = true;
            }
           
            return success;
          },
          sell:function(user,stockName, qty){
            var stockPrice=this._stocksPrice[stockName];
            var userAccount=this._userAccount[user];
            var userStockQty=userAccount?.stocks[stockName];
            var userAmount=userAccount?.amount;
            var success=false;
        
            if(stockPrice!==undefined && userStockQty!==undefined &&
               userAmount!==undefined && qty<=userStockQty){
              _processTransaction(user,stockName,-qty,qty*stockPrice);
              success = true;
            }
           
            return success;
          },
          init: function(){
            _init();
          }
          
    }
}


var sm = new StockMarket();

sm.createAccount("me",10000);
sm.buy("me","GOOGL",1);



