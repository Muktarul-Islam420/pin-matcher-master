//This is for random code generator
document.getElementById('generateBtn').addEventListener('click', function() {
        const generatePin = document.getElementById('generatePin');
        const generateRandomPin = Math.floor(1000 + Math.random(generatePin) * 9000);
        const generateNewPin = Math.round(generateRandomPin);
        document.getElementById('generatePin').value = generateNewPin;
    })
    //this is for second output display
function insert(num) {
    const display2 = document.form.textView.value = document.form.textView.value + num
    return display2

}
//One numbers clean button
function back() {
    var number = document.form.textView.value;
    document.form.textView.value = number.substring(0, number.length - 1)
}
//all numbers clear button
function clean() {
    document.form.textView.value = ''
}

//click on submit button  show match notice
document.getElementById('submitBtn').addEventListener('click', function submit(input) {
        const generatePin = document.getElementById('generatePin');
        const submitPin = document.getElementById('submitPin');
        const notMatch = document.getElementById('notMatch');
        const match = document.getElementById('match');
        const submitBtn = document.getElementById('submitBtn');

        if ((submitPin.value) == 0 && (generatePin.value) == 0) {
            alert("Give me input please");
        }
        if (parseInt(submitPin.value) == parseInt(generatePin.value)) {
            notMatch.style.display = "none";
            match.style.display = "block";
            submitButton.disabled = true;
            return;
        }

        if (tryLeft.innerText > 0) {
            const tryLeft = document.getElementById('tryLeft');
            notMatch.style.display = "block";
            tryLeft.innerText = parseInt(tryLeft.innerText) - 1;
            submitBtn.style.disabled = true;
            return;
        }
    })
    //hide notifications when click on any numbers button 
const numberBtn = document.getElementById('numbers-btn').addEventListener('click', function() {
        noticeHide('match', 'notMatch')

    })
    //hide notifications when click on Generate button 
const generatePinBtn = document.getElementById('generateBtn').addEventListener('click', function() {
        noticeHide('match', 'notMatch')
    })
    //this function for hide notification
function noticeHide(id, id1) {
    var noticeBox2 = document.getElementById(id)
    var noticeBox = document.getElementById(id1)
    noticeBox2.style.display = "none"
    noticeBox.style.display = "none"
}