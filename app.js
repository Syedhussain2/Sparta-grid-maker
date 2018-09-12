document.addEventListener('DOMContentLoaded', function(){

  const board = document.getElementById('board');

  const rows = Number(prompt('how many rows would you like?'))

  const columns = Number(prompt('how many columns would you like?'))

  for (i = 0; i < rows; i++){
    const row = document.createElement('div');
    row.setAttribute('class', 'row'); 
    board.appendChild(row);

    for (j = 0; j < columns; j++){
      const column = document.createElement('div');
      column.setAttribute('class','col');
      board.appendChild(column);
    }
  }
});
