'use strict';
/*Usar lo más estricto posible*/

/*DOMContentLoaded espera a que se cargue toda la página sin modificar recursos*/
document.addEventListener('DOMContentLoaded', () =>{
    const calculatorForm = document.getElementById('calculatorForm');

    calculatorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const number1 = +document.getElementById('number1').value;
        const operator = document.getElementById('operator').value;
        const number2 = +document.getElementById('number2').value;
        const errorContainer = document.getElementById('errorContainer');
        const resultContainer = document.getElementById('resultContainer');

        /*alert(`
            número1: ${number1}
            operator: ${operator}
            number2: ${number2}
        `)*/

        let result = 0;

        /*if (operator === '+') {
            result = number1 + number2;
        };*/

        const operations = {
            "+" : (a,b) => a + b,
            "-" : (a,b) => a - b,
            "/" : (a,b) => a / b,
            "*" : (a,b) => a * b
        };

        if(isNaN (number1) || isNaN(number2) || operator === '') {
            errorContainer.textContent = 'Debe completar el formulario';
        } else {
            errorContainer.textContent = '';
            resultContainer.textContent = operations[operator](number1, number2);
        }

        /*resultContainer.textContent = result;*/
    });
});

