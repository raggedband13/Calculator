const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');


function calculate() {
    try {
        return display.value = eval(display.value)
    } catch(error) {
        return 'Error'
    }
}

function operation(buttonValue) {
    if(buttonValue === 'C') {
        display.value = '';
    } else if(buttonValue === 'D') {
        display.value = display.value.slice(0, -1);
    } else if(buttonValue === '=') {
        display.value = calculate(display.value)
    } else {
        display.value += buttonValue
    }
}

buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', () => {
        operation(buttonValue)
    })
})