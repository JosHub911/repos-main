function telOp(getal1, getal2){
    let opgeteld = getal1 + getal2;
    console.log(opgeteld);
}

telOp(7,29);


function multiplyDie(getal1, getal2){
    let vermedigvuldig = getal1 * getal2;
    console.log(vermedigvuldig)
}

telOp(2,5);

function randomGetal(){
    var aantalOgen = Math.ceil(Math.random()*6);
    return aantalOgen;
}

let dobbelsteen = randomGetal();

function largerNum(num1, num2) {
    if (num1 < num2) {
        return num2;
    } else if (num1 > num2) {
        return num1;
    } else {
        return 0; 
    }
}
console.log(largerNum(0,6))

