
const grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]


function renderGrid(grid) {
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        /* if(statechek === false) {
             console.log('сколько иксов');
             winX = winX + 1
             if(winX < 3) {
                 alert('X WIN!')
             }
         }
         if(statechek === true) {
             winY = winY + 1
             if(winY < 3) {
                 alert('O WIN!')
             }
         } */
        for (let cellIndex = 0; cellIndex < grid[rowIndex].length; cellIndex++) {

            renderCell(cellIndex, rowIndex, grid[rowIndex][cellIndex], 100)
            console.log('grid[' + rowIndex + '][' + cellIndex + '] =' + grid[rowIndex][cellIndex])
            //console.log(grid[rowIndex][cellIndex])

        }
    }
}

function renderCell(cellIndex, rowIndex, state, size = 50) {
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

let numberOfCalls = 0;

document.addEventListener('click', (event) => {
    const rowIndex = event.target.dataset.row
    const cellIndex = event.target.dataset.cell

    let fn = (function() {
        return function() {
            return Number.isInteger(++ numberOfCalls / 2)
        }
    })();

    grid[rowIndex][cellIndex] = fn()

    renderGrid(grid)

    if(grid[0][0] === false && grid[0][1] === false && grid[0][2] === false) {
        alert('X is the winner!')
    }
    if(grid[0][0] === true && grid[0][1] === true && grid[0][2] === true) {
        alert('O is the winner!')
    }
    if(grid[1][0] === false && grid[1][1] === false && grid[1][2] === false) {
        alert('X is the winner!')
    }
    if(grid[1][0] === true && grid[1][1] === true && grid[1][2] === true) {
        alert('O is the winner!')
    }
    if(grid[2][0] === false && grid[2][1] === false && grid[2][2] === false) {
        alert('X is the winner!')
    }
    if(grid[2][0] === true && grid[2][1] === true && grid[2][2] === true) {
        alert('O is the winner!')
    }
})


renderGrid(grid)