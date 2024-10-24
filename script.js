const container = document.querySelector('#container');
const columns = 3; // Number of columns
// const rows = 10; // Number of rows
const setResBtn = document.querySelector('#setResolutionBtn');


// return a string representing the value of property
let width = window.getComputedStyle(document.querySelector('#container')).width
console.log(width);
// convert the numeric part into float, discard the string chars
width = parseFloat(width);

function createGrid() {
    for (let i = 0; i < columns*columns; i++) {
        const element = document.createElement('div');
        element.classList.add('columns');
        element.style.width = `${width/columns}px`
        element.style.height = `${width/columns}px`
        console.log(`in the loop ${width}`);
    
        container.appendChild(element);
    }
}

setResBtn.addEventListener('click', () => {
    let gridResolution = prompt("Set the grid dimensions: ");
    console.log(gridResolution);
    container.style.height = `${gridResolution}px`;
    container.style.width = `${gridResolution}px`;
    console.log(`unutar setResBtn-a ${width}`);
    // clear everything from grid
    container.innerHTML = '';

    // recalculate grid canvas dimension
    width = window.getComputedStyle(document.querySelector('#container')).width
    console.log(width);
    // convert the numeric part into float, discard the string chars
    width = parseFloat(width);

    
    // fill the grid out using new values
    createGrid();
})


// initial set-up
createGrid();