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

    let fn = (function () {
        return function () {
            return Number.isInteger(++numberOfCalls / 2)
        }
    })();

    grid[rowIndex][cellIndex] = fn()

    renderGrid(grid)
    //-----------------------------------------------

    function checkWinHorizontal(grid) {
        for (let a = 0; a < grid.length; a++) {
            let win1 = 0
            let win2 = 0
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
        }
    }
    //-----------------------------------------------
    function checkWinVertical(grid) {
        for (let a = 0; a < grid.length; a++) {
            let win1 = 0
            let win2 = 0
            for (let i = 0; i < grid.length; i++) {
                if (grid[i][a] === false) {
                    win1 = win1 + 1
                    if (win1 === grid.length) {
                        console.log('X is the winner! Vertical ' + a);
                    }
                } else if (grid[i][a] === true) {
                    win2 = win2 + 1
                    if (win2 === grid.length) {
                        console.log('O is the winner! Vertical ' + a);
                    }
                }
            }
        }
    }

    //-----------------------------------------------
    function checkWinDiagonal1(grid) {
        let win = 0
        let a = 0
        //let i = 0
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][i] === false) {
                win = win + 1
                if (win === 3) {
                    console.log('X is the winner! Diagonal 1');
                }
            } else if (grid[i][i] === true) {
                win = win + 1
                if (win === 3) {
                    console.log('O is the winner! Diagonal 1');
                }
            }
        }
    }
    function checkWinDiagonal2(grid) {
        let win = 0
        let a = 3
        //let i = 0
        for (let i = 0; i < grid.length; i++) {
            a = a - 1
            console.log(a)
            if (grid[i][a] === false) {
                win = win + 1
                if (win === 3) {
                    console.log('X is the winner! Diagonal 2');
                }
            } else if (grid[a][i] === true) {
                win = win + 1
                if (win === 3) {
                    console.log('O is the winner! Diagonal 2');
                }
            }
        }
    }
    //-----------------------------------------------

    checkWinDiagonal1(grid)
    checkWinDiagonal2(grid)

    checkWinHorizontal(grid)
    checkWinVertical(grid)
    //-----------------------------------------------

    /*if(grid[0][0] === false && grid[0][1] === false && grid[0][2] === false) {
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
    }*/
})


renderGrid(grid)