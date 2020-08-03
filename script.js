//This is for random code generator
const displayPin = document.getElementById('GenerateBtn').addEventListener("click", function() {
    const randomNumber = Math.ceil(Math.random() * 10000 + 1)
    document.getElementById('Output').value = randomNumber
    return randomNumber
        //console.log(randomNumber)
})


function insert(num) {
    const display2 = document.form.textView.value = document.form.textView.value + num
    return display2

}

function back() {
    var number = document.form.textView.value;
    document.form.textView.value = number.substring(0, number.length - 1)
}

function clean() {
    document.form.textView.value = ''
}



const submitBtn = document.getElementById('SubmitButton').addEventListener("focus", function(isMatch) {
    showMatch(true);
    showMatch(false);



})

function showMatch(isMatch) {
    const element1 = document.getElementById('Output').value;
    console.log(element1)
    const element2 = document.getElementById('textView').value;
    console.log(element2)

    var noticeBox2 = document.getElementById("show-2")
    var noticeBox = document.getElementById("show-1")
    const noticeAll = document.getElementById('notice-board')

    if (element1 == 0 && element2 == 0) {
        alert('Give me input please');

    } else if (isMatch == true && element1 == element2) {
        noticeBox2.style.display = "block"
        noticeBox2.style.display = "none" == false
    } else if (isMatch == false && element1 !== element2) {
        noticeBox.style.display = "block"
        noticeBox.style.display = "none" == true
    }

}