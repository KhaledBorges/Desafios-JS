function gerarnumeroaleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

let numerogerado1 = gerarnumeroaleatorio();

console.log (`${numerogerado1}`)

alert (`Seu número gerado é ${numerogerado1}`)

let numeroMultiplicado = parseInt(numerogerado1) * parseInt(numerogerado1)

alert (`Seu número vezes ele mesmo é ${numeroMultiplicado}`)