let result = '';
let retry = true;
let bits1 =  '010100';
let bits2 =  '000111';
let operation = 'OR';

while (retry) {
    bits1 = prompt('Ingrese los primeros bits a comparar');
    bits2 = prompt('Ingrese los segundos bits a comparar');
    retry = validateBits(bits1, bits2)
}
while (true) {
    operation = prompt('Ingrese la operacion "AND" o "OR" para los bits');
    if ((operation != 'AND') && (operation != 'OR')) {
        alert('Ingrese una operacion valida "AND" o "OR" deben estan en mayuscula')
        continue
    }
    break
}

result = compare (bits1, bits2, operation)
alert(  'Primeros bits:       ' + bits1 + '\n' +
        'Segundos bits:     ' + bits2 + '\n' +
        'Operacion:           ' + operation + '\n' +
        'El resulado es:      ' + result)

function validateBits (bit1, bit2) {
    if (bit1.length != bit2.length) {
        alert('Los dos bits deben tener el mismo largo, vuelva a intentar')
        return true;
    }
    for (let i = 0; i < bit1.length; i++) {
        if ((bit1[i] != '1') && (bit1[i] != '0')) {
            alert('Los bits deben contener solo 1 y 0, vuelva a intentar')
            return true
        }
    }
    for (let i = 0; i < bit2.length; i++) {
        if ((bit2[i] != '1') && (bit2[i] != '0')) {
            alert('Los bits deben contener solo 1 y 0, vuelva a intentar')
            return true
        }
    }
    return false
}

function compare (bit1, bit2, op) {
    for (let i = 0; i < bit1.length; i++) {
        if (op == "AND") {
            result = result + andCompare(bit1[i], bit2[i])
        }
        else {
            result = result + orCompare(bit1[i], bit2[i])
        }
    }
    return result
}

function andCompare(bit1, bit2) {
    if ((bit1 == '1') && (bit2 == '1')) {
        return '1';
    }
    else {
        return '0';
    }
}

function orCompare(bit1, bit2) {
    let a = (bit1 == '1')
    let b = (bit2 == '1')
    //quise hacer la operacion de comparar directamente en el if
    // entraba directamente siempre al if, incluso en los casos que debia pasar al else
    if ((a) || (b)) {
        return '1';
    }
    else {
        return '0';
    }
}
