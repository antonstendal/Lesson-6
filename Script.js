//Полиморфизм
function Car(name) {	
  this.name = name;
}

Car.prototype.ride = function() {	
  console.log(this.name + "move");
}

function Chevrolet(name) {	
  Car.call(this, name);
}

Chevrolet.prototype.ride = function() {	
  Car.prototype.ride.call(this); 
  console.log("onLeft");
}

function Honda(name) {	
  Car.call(this, name);
}

Honda.prototype.ride = function() {	
  Car.prototype.ride.call(this); 
  console.log("onRight");
}

var x = new Chevrolet("Cruze");     
x.ride();  
                 
var y = new Honda("Civic");     
y.ride();   

//Инкапсуляция

function car() {	
  this.Type = "station wagon";
}
car.prototype.MyFunction = function(station wagon) {	
  this.Type = "crossover";
}


var MyCar = new car();
MyCar.MyFunction("station wagon");

var MyCar2 = new car();
Mycar.MyFunction("crossover");

//Наследование

function Car(name) {	
  this.name = name;
}

function Chevrolet(name) {
  Car.call(this, name);
}
	Chevrolet.prototype = new Car();

	Chevrolet.prototype.ChangeName(newname);
{
  this.name = newname;
}


                
