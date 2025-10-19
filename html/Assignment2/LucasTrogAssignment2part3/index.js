const subTotalInput = document.getElementById('subtotal');
const tipInput = document.getElementById('tipAmount');
const button = document.getElementById('btn');
const display = document.getElementById('display');

function findTotal(sub, tip) {
    const result = sub + tip;
    return result;
}

button.addEventListener('click', () => {
    const sub = parseFloat(subTotalInput.value);
    const tip = parseFloat(tipInput.value);

    if (isNaN(sub)) {
        display.textContent = 'Enter a valid number';
        display.style.color = 'red';
    } else if (isNaN(tip)) {
        display.textContent = `Bill Total: ${sub}`;
    } else {
    display.style.color = 'black';
    display.textContent = `Bill Total: ${findTotal(sub, tip)}`;
    }
});