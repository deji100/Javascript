var scoops = 5;
while (scoops > 0) {
    document.write('<h1>Another scoop please!!</h1><br>');
    if (scoops >= 5) {
        alert("Eat faster, the ice cream is going to melt.")
    }
    else if (scoops == 3) {
        alert("Ice cream is running low.")
    } 
    else if (scoops == 2) {
        alert("Going once!!")
    } 
    else if (scoops == 1) {
        alert("Going twice!!")
    } 
    else if (scoops == 0) {
        alert("Gone!!")
    }
    scoops -= 1;
}
document.write("<h1>Life without ice cream isn't the same.</h1>")