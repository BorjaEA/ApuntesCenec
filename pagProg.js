var numeroHex = document.getElementById("NumeroHexa")
var numeroBin = document.getElementById("NumeroBina")
var numeroDec = document.getElementById("NumeroDeci")

numeroHex.addEventListener("input", () => {
    numeroBin.value  = parseInt(numeroHex.value, 16).toString(2).padStart(8, '0');
    numeroDec.value  = parseInt(numeroHex.value, 16)
})

numeroBin.addEventListener("input", () => {

    numeroHex.value = parseInt(numeroBin.value, 2).toString(16).toUpperCase();

})

//