function gerarnumeroaleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

let numerogerado1 = gerarnumeroaleatorio();

alert (`O número escolhido pela máquina é ${numerogerado1}`)

function multiplicarnumero() {
    return parseInt(numerogerado1) * 2
}

let numerogerado2 = multiplicarnumero();

alert (`E o dobro desse número é ${numerogerado2}`)