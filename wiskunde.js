function kubusinhoud(hoogte, breedte, lengte){
return lengte * breedte * hoogte 
}

let kubus = kubusinhoud(10, 5, 10);
console.log(kubus);

function cilinderInhoud(diameter, hoogte2){
    let pi = Math.PI
    return diameter * pi * hoogte2

    }
    
    let cilinder = cilinderInhoud(10, 5);
    console.log(cilinder);

    function driekoek(korte, korte2){
        let Lange = Math.pow(korte,2)
        return Math.pow(korte2,2) + Lange

    }

    let drh = driekoek(10,30);
    console.log(drh)


    