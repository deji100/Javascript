var word = "bottles";
var counts = 99;
while (counts > 0) {
    console.log(" "+counts+" "+word+" of beer on the wall.");
    console.log(" "+counts+" "+word+" of beer,");
    console.log("Take one down, pass it around");
    counts -= 1;
    if (counts >= 1) {
        console.log(" "+counts+" "+word+" of beer on the wall.")
    } else {
        console.log("No more " + word + " of beer on the wall.")
    }
}