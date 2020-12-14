 // стартовое состояние
function matrixMaker(m, n) {
	let matrix = new Array(m)
    .fill(null)
	.map( () => 
		new Array(n)
		.fill(null)
		.map(() => Math.floor( Math.random() * 2 )) 
	);

	return matrix; 
}

let board = matrixMaker(10, 9);
console.log(board);


// взаимодействие с соседями
// счетчик живых соседей
function aliveNeighbors(i, j) {
	let count = 0;

	// проверка координат крайних клеток
	function Check(num, length) {
		num < 0 ? num = 0 : num;
		num >= length ? num = (length-1) : num;
		return num;
	}

	// координаты соседей
	let a = Check((i-1), board.length), b = Check((i+1), board.length);
	let c = ((j-1), board[j].length), d = ((j+1), board[j].length);

	// суммируем значения всех соседей
	for (let f = a; f <= b; f++) {
		for (let g = c; g <= d; g++) {
			count += board[f][g];
		}	
	}
	return count;
}	

// смерть/возрождение
function cellsInteraction (arr) {
	for (let i = 0; i < arr.length; i++) {
		
		for (let j = 0; j < arr[i].length; j++) {
			let count = aliveNeighbors(i, j);

			if (arr[i][j] == 1) { //условия для живой клетки
				(count-1) < 2 || (count-1) > 3 ? arr[i][j] = 0 : arr[i][j]; 
			} else if (arr[i][j] == 0) { //условия для мертвой клетки
				count == 3 ? arr[i][j] = 1 : arr[i][j];
			}
		}

	}

	console.log(arr);
	return arr
}

cellsInteraction(board);

