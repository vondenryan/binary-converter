const button_cD = document.getElementById("btn-to-string")
const button_cB = document.getElementById("btn-to-binary")
const clear_button = document.getElementById("btn-clear")

const txtInput = document.getElementById("text-input")
const binaryInput = document.getElementById("binary-input")

button_cB.addEventListener('click', function() {
    let content = txtInput.value
    
    if(content.trim() !== "") {
        binaryInput.value = string_to_binary(content)
    }
})

button_cD.addEventListener('click', function() {
    let content = binaryInput.value
    
    if(content.trim() !== "") {
        txtInput.value = binary_to_string(content)
    }
})

clear_button.addEventListener('click', function() {
    txtInput.value = ""
    binaryInput.value = ""
})