const container = document.getElementById('container');
const columns = 20; // Number of columns
// const rows = 10; // Number of rows
const setResBtn = document.querySelector('#setResolutionBtn');



// return a string representing the value of property
let width = window.getComputedStyle(document.querySelector('#container')).width
console.log(width);
// convert the numeric part into float, discard the string chars
width = parseFloat(width);


setResBtn.addEventListener('click', () => {
    let gridResolution = prompt("Set the grid dimensions: ");
    console.log(gridResolution);
})

for (let i = 0; i < columns*columns; i++) {
    const element = document.createElement('div');
    element.classList.add('columns');
    element.style.width = `${width/columns}px`
    element.style.height = `${width/columns}px`

    container.appendChild(element);
}