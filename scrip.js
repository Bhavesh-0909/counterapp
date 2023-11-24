let value = document.querySelector('.value');
 
let inc = () => {
    let increment = parseInt(value.textContent);
    increment += 1;
    value.textContent = increment;
}

let de = () => {
    let decrement = parseInt(value.textContent);
    decrement -= 1;
    value.textContent = decrement;
}