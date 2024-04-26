function gerarnumeroaleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

let numerogerado1 = gerarnumeroaleatorio();
let numerogerado2 = gerarnumeroaleatorio();
let numerogerado3 = gerarnumeroaleatorio();

alert (`seus números são ${numerogerado1}, ${numerogerado2} e ${numerogerado3}`)

let media = parseInt(numerogerado1 + numerogerado2 + numerogerado3 / 3)

alert (`sua média é ${media}`)