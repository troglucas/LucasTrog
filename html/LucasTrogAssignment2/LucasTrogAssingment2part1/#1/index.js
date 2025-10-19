//assign elements
//input
const input = document.getElementById('input');
//button
const button = document.getElementById('Rbtn');
//p
const result = document.getElementById('display');

//function
function reverseText(text) {
    return text.split('').reverse().join('');
}

//on button click
button.addEventListener('click', () => {
    const userText = input.value.trim();

    if (userText === '') {
        result.textContent = 'Enter a string';
        result.style.color = 'red';
    } else {
        result.style.color = 'black';
        result.textContent = `Reversed: ${reverseText(userText)}`;
    }

})