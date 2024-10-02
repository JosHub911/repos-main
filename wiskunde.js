function kubusinhoud(hoogte, breedte, lengte){
return lengte * breedte * hoogte 
}

let kubus = kubusinhoud(10, 5, 10);
console.log(kubus);

function cilindir(diameter, hoogte1){
    let p2i = Math.PI
    let radius = diameter / 2 ;
    return Math.pow(radius,2) * p2i * hoogte1
}

let inhoudK = cilindir(20, 50);
console.log(inhoudK); 
function driehoek(lengte2, hoogte2){
    return Math.sqrt(Math.pow(lengte2, 2) + Math.pow(hoogte2, 2));
}

let drie = driehoek(20,50);
console.log(drie)

    function getallen(one,two,three,four,five,six,seven){
        let middle = one + two + three + four + five + six + seven
        return middle / 7
    }
    
    let middle = getallen(2,6,4,3,7,2,5)
    console.log(middle)
