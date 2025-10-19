const input = document.getElementById('numInput');
const button = document.getElementById('btn');
const display = document.getElementById('display');

function palindromeNum(num) {
    const reversedNum = num.split('').reverse().join('');
    return num === reversedNum;
}

    button.addEventListener('click', () => {

    const userInput = input.value.trim();

        if (userInput === '' || isNaN(userInput)) {
            display.textContent = "Enter a valid number";
            display.style.color = 'red';
            return;
        }

        if (palindromeNum(userInput)) {
            display.textContent = `${userInput} is palindrome`;
            display.style.color = 'green';
        } else {
            display.textContent = `${userInput} is not palindrome`;
            display.style.color = 'red';
        }
    });
