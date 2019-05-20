 const ALL_CARS =[]
 cars_sorted = { }

  function loadDoc() {
  var xhttp = new XMLHttpRequest(); // create and xhr object -- request object
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { // everything this take place between this block
     let data = JSON.parse(this.responseTEXT)
     for (item in data) {
       let car = new Car(item)
       car.make = new Car(item,
         data[item].make,
         data[item].model,
         data[item].model_year,
         data[item].color)
         if (car.make = 
         cars_sorted[data[item].make] = []
     }
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/mlaw-nycda/empireCommerce/master/cars.json", true);
  xhttp.send();
}
 Class car {
   constructor(vin, make, model, year, color) {
     this.vin = vin
     this.make = make
     this.model = model
     this.year = year
     this.color = color
     if (ALL_CARS.length < 15) {
       ALL_CARS.push(this)
     }
   }
 }
