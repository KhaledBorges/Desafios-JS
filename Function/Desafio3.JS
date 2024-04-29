function gerarnumeroaleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

let numerogerado1 = gerarnumeroaleatorio();
let numerogerado2 = gerarnumeroaleatorio();

console.log (`${numerogerado1} e ${numerogerado2}`)

if (numerogerado1 > numerogerado2) {
    alert (`seu número é o ${numerogerado1}`)
} else {
    if (numerogerado1 == numerogerado2) {
        alert (`os dois números deram ${numerogerado1}`)
    } else {
        alert (`seu número é o ${numerogerado2}`)
    }
    
}