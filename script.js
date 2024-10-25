const container = document.querySelector('#container');
const columns = 40; // Number of columns
// const rows = 10; // Number of rows
const setResBtn = document.querySelector('#setResolutionBtn');
let isDrawing = false;

// return a string representing the value of property
let containerWidth = window.getComputedStyle(document.querySelector('#container')).width
console.log(containerWidth);
// convert the numeric part into float, discard the string chars
containerWidth = parseFloat(containerWidth);

function createGrid() {
    container.innerHTML = ''; // Clear existing elements
    for (let i = 0; i < columns*columns; i++) {
        const element = document.createElement('div');
        element.classList.add('gridPixels');
        calculateElementSize(element);
        console.log(`in the loop ${containerWidth}`);
        container.appendChild(element);
    }
}

function calculateElementSize(element) {
    element.style.width = `${containerWidth/columns}px`
    element.style.height = `${containerWidth/columns}px`
}; 

container.addEventListener('mousedown', (event) => {
    // Check if the clicked element has the desired class
    if (event.target.classList.contains('gridPixels')) {
        isDrawing = true;
        event.target.style.backgroundColor = 'black';
        console.log('Dynamic element mousedown event');
    }
});

container.addEventListener('mousemove', (event) => {
    if (isDrawing && event.target.classList.contains('gridPixels')) {
        event.target.style.backgroundColor = 'red';
        console.log('mousemove');
    }
});

container.addEventListener('mouseup', () => {
    isDrawing = false; // Mouseup stop drawing
});

setResBtn.addEventListener('click', () => {
    let gridResolution = prompt("Set the grid dimensions: ");
    if (!isNaN(gridResolution) && gridResolution > 0) {
        console.log(gridResolution);
        container.style.height = `${gridResolution}px`;
        container.style.width = `${gridResolution}px`;
        containerWidth = parseFloat(window.getComputedStyle(container).width);
        console.log(`unutar setResBtn-a ${containerWidth}`);
        createGrid();
    } else {
        alert("Please enter a valid number.");
    }
});

// initial set-up
createGrid();
