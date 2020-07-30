//This is for random code generator
const displayPin = document.getElementById('GenerateBtn').addEventListener("click", function() {
    const randomNumber = Math.ceil(Math.random() * 10000 + 1)
    document.getElementById('Output').value = randomNumber
    console.log(randomNumber)
})