class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.isAlive = false; // Represents the state of the cell (alive or dead)
    }

    toggle() {
        this.isAlive = !this.isAlive; // Toggle the state of the cell
    }
}

class GameOfLife {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.board = this.createEmptyBoard(); // Initialize the game board
        this.generation = 0; // Track the current generation
        this.isRunning = false; // Indicate if the simulation is running
        this.interval = null; // Store the interval for advancing generations
    }

    createEmptyBoard() {
        const board = [];
        for (let row = 0; row < this.rows; row++) {
            board.push([]);
            for (let col = 0; col < this.cols; col++) {
                board[row].push(new Cell(row, col)); // Create a 2D array of cells
            }
        }
        return board;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.interval = setInterval(() => {
                this.nextGeneration(); // Calculate the next generation
                this.generation++;
                this.updateBoard(); // Update the UI to reflect changes
            }, 500); // Adjust the interval as needed
        }
    }

    stop() {
        if (this.isRunning) {
            clearInterval(this.interval); // Stop the simulation
            this.isRunning = false;
        }
    }

    clear() {
        this.board = this.createEmptyBoard(); // Clear the board and reset the generation
        this.generation = 0;
        this.updateBoard(); // Update the UI
    }

    toggleCell(row, col) {
        if (!this.isRunning) {
            this.board[row][col].toggle(); // Toggle the state of the clicked cell
            this.updateBoard(); // Update the UI
        }
    }

    nextGeneration() {
        const newBoard = this.createEmptyBoard(); // Create a new board to hold the next generation

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const cell = this.board[row][col];
                const liveNeighbors = this.countLiveNeighbors(row, col); // Count live neighbors

                if (cell.isAlive) {
                    newBoard[row][col].isAlive = liveNeighbors === 2 || liveNeighbors === 3; // Apply rules for living cells
                } else {
                    newBoard[row][col].isAlive = liveNeighbors === 3; // Apply rules for dead cells
                }
            }
        }

        this.board = newBoard; // Update the board with the next generation
    }

    countLiveNeighbors(row, col) {
        const neighbors = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];

        let count = 0;
        for (const [dx, dy] of neighbors) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (newRow >= 0 && newRow < this.rows && newCol >= 0 && newCol < this.cols) {
                count += this.board[newRow][newCol].isAlive ? 1 : 0; // Count live neighbors within the bounds
            }
        }

        return count;
    }

    updateBoard() {
        // Implement updating the UI
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const cell = this.board[row][col];
                const cellElement = document.getElementById(`cell-${row}-${col}`);
                if (cell.isAlive) {
                    cellElement.classList.add("alive"); // Add "alive" class to living cells
                } else {
                    cellElement.classList.remove("alive"); // Remove "alive" class from dead cells
                }
            }
        }
    }
}

// Set up for user interaction

const numRows = 20;
const numCols = 20;
const cellSize = 20;

const game = new GameOfLife(numRows, numCols);

const boardContainer = document.getElementById("board");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const clearButton = document.getElementById("clearButton");

function createBoard() {
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.id = `cell-${row}-${col}`;
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.addEventListener("click", () => {
                game.toggleCell(row, col);
            });
            boardContainer.appendChild(cell);
        }
    }
}

createBoard();

startButton.addEventListener("click", () => {
    game.start();
});

stopButton.addEventListener("click", () => {
    game.stop();
});

clearButton.addEventListener("click", () => {
    game.clear();
});
