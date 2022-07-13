


function setPageTitle(){
    const body = document.querySelector('body');
    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'main-title');
    h1.textContent = 'Calculator';
    h1.style.textAlign = 'center';
    h1.style.margin = '25px';
    body.appendChild(h1);
}

function createFrame(){
    const body = document.querySelector('body');
    const box = document.createElement('div');
    box.setAttribute('id', 'main-container');
    // box.style.backgroundColor = 'RED';
    box.style.width = '500px';
    box.style.height = '500px';
    box.style.border = 'solid red';
    box.style.margin = 'auto';
    body.appendChild(box);
}

function createCalculator(){
    const main_container = document.getElementById('main-container');
    const calculator_body = document.createElement('div');
    calculator_body.setAttribute('class', 'calculator-body');
    calculator_body.style.border = 'solid black';
    calculator_body.style.height = '400px';
    calculator_body.style.width = '250px';
    calculator_body.style.margin = 'auto';
    main_container.appendChild(calculator_body);
}

function createCalculatorSkeleton(){
    const calculator_body = document.getElementsByClassName('calculator-body');
    calculator_body[0].style.display = 'flex';
    calculator_body[0].style.flexDirection = 'column'

    const display_section = document.createElement('div');
    display_section.setAttribute('class', 'display-section');
    display_section.style.border = 'solid red';
    display_section.style.flex = '1';

    const number_and_operations_container = document.createElement('div');
    number_and_operations_container.setAttribute('class', 'number_and_operations_container');
    number_and_operations_container.style.border = 'solid green';
    number_and_operations_container.style.display = 'flex';
    //number_and_operations_container.style.flexDirection = 'column';
    number_and_operations_container.style.flex = '8';
    
    const number_section = document.createElement('div');
    number_section.setAttribute('class', 'number-section');
    number_section.style.border = 'solid pink';
    number_section.style.flex = '3';


    const operations_section = document.createElement('div');
    operations_section.setAttribute('class', 'operations-section');
    operations_section.style.border = 'solid yellow';
    operations_section.style.flex = '1';

    number_and_operations_container.appendChild(number_section);
    number_and_operations_container.appendChild(operations_section);

    calculator_body[0].appendChild(display_section);
    calculator_body[0].appendChild(number_and_operations_container);

}


setPageTitle();
createFrame();
createCalculator();
createCalculatorSkeleton()



let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;

let operate = (operator, a, b) => operator(a,b);