    
const grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]


function renderGrid(grid) {
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        
        for (let cellIndex = 0; cellIndex < grid[rowIndex].length; cellIndex++) {
            renderCell(cellIndex, rowIndex, grid[rowIndex][cellIndex], 100)
        }
        
    }
}

function renderCell(cellIndex, rowIndex, state = 0, size = 50) {
    const newDiv = document.createElement("div");
    newDiv.className = 'cell';
    newDiv.style.left = cellIndex * size + "px"
    newDiv.style.top = rowIndex * size + "px"
    newDiv.style.width = size + 'px'
    newDiv.style.height = size + 'px'
    newDiv.dataset.row = rowIndex
    newDiv.dataset.cell = cellIndex

    if (state === false) {
        newDiv.innerText = 'X'
    }

    if (state === true) {
        newDiv.innerText = 'O'
    }


    document.body.appendChild(newDiv);
    
}

document.addEventListener('click', (event) => {
    const rowIndex = event.target.dataset.row
    const cellIndex = event.target.dataset.cell
    
    let fn = (function() {
        let numberOfCalls = 0;
        return function() {
           return Number.isInteger(++ numberOfCalls / 2)
        }
     })();

    grid[rowIndex][cellIndex] = fn()
   
   
   
   
   
   
   
    renderGrid(grid)
})

renderGrid(grid)