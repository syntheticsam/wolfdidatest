console.log("Hello World !");
var a = 0;
var b = 1;
var c = 1;


var rep = 0;


// Rep is the amount of times the program will repeat
while (rep < 200) {
    //Print Number
    console.log (c);
    //Store New Fibonacci
    c = a + b;
    //Move numbers
    a = b;
    b = c;
    //Show repeat
    rep = rep + 1;
}


