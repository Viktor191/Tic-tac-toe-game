const grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]


function renderGrid(grid) {
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
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

    let fn = (function () {
        return function () {
            return Number.isInteger(++numberOfCalls / 2)
        }
    })();

    grid[rowIndex][cellIndex] = fn()

    renderGrid(grid)
    //-----------------------------------------------
    function checkWinHorizontalVertical(grid) {
        for (let a = 0; a < grid.length; a++) {
            let win1 = 0
            let win2 = 0

            let win3 = 0
            let win4 = 0

            for (let i = 0; i < grid.length; i++) {
                if (grid[a][i] === false) {
                    win1 = win1 + 1
                    if (win1 === grid.length) {
                        console.log('X is the winner ! Horizontal ' + a);
                    }
                } else if (grid[a][i] === true) {
                    win2 = win2 + 1
                    if (win2 === grid.length) {
                        console.log('O is the winner! Horizontal ' + a);
                    }
                }
            }
            for (let i = 0; i < grid.length; i++) {
                if (grid[i][a] === false) {
                    win3 = win3 + 1
                    if (win3 === grid.length) {
                        console.log('X is the winner! Vertical ' + a);
                    }
                } else if (grid[i][a] === true) {
                    win4 = win4 + 1
                    if (win4 === grid.length) {
                        console.log('O is the winner! Vertical ' + a);
                    }
                }
            }
        }
    }
    //-----------------------------------------------
    function checkWinDiagonal1(grid) {
        let win1 = 0
        let win2 = 0
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][i] === false) {
                win1 = win1 + 1
                if (win1 === grid.length) {
                    console.log('X is the winner! Diagonal 1');
                }
            } else if (grid[i][i] === true) {
                win2 = win2 + 1
                if (win2 === grid.length) {
                    console.log('O is the winner! Diagonal 1');
                }
            }
        }
    }
    function checkWinDiagonal2(grid) {
        let win1 = 0
        let win2 = 0
        let a = 3
        //let i = 0
        for (let i = 0; i < grid.length; i++) {
            a = a - 1
            if (grid[i][a] === false) {
                win1 = win1 + 1
                if (win1 === grid.length) {
                    console.log('X is the winner! Diagonal 2');
                }
            } else if (grid[a][i] === true) {
                win2 = win2 + 1
                if (win2 === grid.length) {
                    console.log('O is the winner! Diagonal 2');
                }
            }
        }
    }
    //-----------------------------------------------

    checkWinDiagonal1(grid)
    checkWinDiagonal2(grid)
    checkWinHorizontalVertical(grid)
})
renderGrid(grid)
// результат игры выводится в консоль