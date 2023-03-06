myFunction();
function myFunction() {
    let carName = "Volvo";
    document.getElementById("demo1").innerHTML =
    typeof carName + " " + carName;
}
// code here can NOT use carName
document.getElementById("demo2").innerHTML = typeof carName;