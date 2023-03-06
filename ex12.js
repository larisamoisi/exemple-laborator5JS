document.getElementById("demo").innerHTML = "The temperature is " + toCelsius(77) + " Celsius";
function toCelsius(fahrenheit) {
return (5/9) * (fahrenheit-32);
} 