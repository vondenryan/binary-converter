function binary_to_decimal(binary) {
    let cont = 0
    let decimal = 0
    let len

    binary = binary + ""
    len = binary.length

    for(let i = len; i > 0; i--) {
        decimal += binary[i - 1] * (2 ** cont)
        cont++
    }

    return decimal
}

function decimal_to_binary(decimal) {
    let binary = ""

    while(decimal > 0) {
        binary = decimal % 2 + binary
        decimal = parseInt(decimal / 2)
    }

    while(binary.length < 8) {
        binary = "0" + binary
    }

    return binary
}

function string_to_binary(txt) {
    let len
    let binary_string = ""

    len = txt.length

    for(let i = 0; i < len; i++) {
        let charInt = txt.charCodeAt(i)
        let binary = decimal_to_binary(charInt)
        binary_string += binary + " "
    }

    return binary_string
}

function binary_to_string(binaryString) {
    let decimal, letter, binaryList, phrase = ""

    binaryList = binaryString.split(" ")

    for(let binary of binaryList) {
        decimal = binary_to_decimal(binary)
        letter = String.fromCharCode(decimal)
        phrase += letter
    }

    return phrase
}
