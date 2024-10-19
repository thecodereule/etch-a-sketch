const container = document.getElementById('container');
const columns = 7; // Number of columns
const rows = 10; // Number of rows

for (let i = 0; i < columns*columns; i++) {
    const element = document.createElement('div');
    element.classList.add('columns');
    element.style.width = `${300/columns}px`
    element.style.height = `${300/columns}px`

    
    container.appendChild(element);
}