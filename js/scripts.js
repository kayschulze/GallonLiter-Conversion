var gallons = parseFloat(prompt("Enter the amount of gallons: "));

var gallonConverter = function(inputGallon) {
  return inputGallon * 3.78;
}

var displayLiter = function(calculatedGallons) {
  alert(gallonConverter(calculatedGallons));
};

displayLiter(gallons); //Defines "calculatedGallons" 
