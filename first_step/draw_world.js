(function () {
  Glb.ctx.fillStyle = 'ff000';
  Glb.ctx.fillRect(0, 0, Glb.canvas.width, Glb.canvas.height);

  this.drawGeneration(Glb.matrix);
})();

function drawGeneration(array) {
  if (Glb.cellContainer.length) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (array[i][j].lifeStatus) {
          Glb.ctx.fillStyle = 'yellow';
        } else {
          Glb.ctx.fillStyle = 'white';
        }

        Glb.ctx.fillRect(ox, oy, Glb.cellWidth - 1, Glb.cellHeight - 1);
      }
    }
  } else {
    var ox = 0,
        oy = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {

            var temporaryCell = new Cell.constructor(ox, oy);
            Glb.cellContainer.push(temporaryCell);


            Glb.ctx.fillStyle = 'white';

            Glb.ctx.fillRect(ox, oy, Glb.cellWidth - 1, Glb.cellHeight - 1);

            if (ox < Glb.canvas.width - Glb.cellWidth) {
                ox += Glb.cellWidth;
            } else {
                oy += Glb.cellHeight;
                ox = 0;
            }
        }
    };

    setNeighborsForEachCell(Glb.cellContainer);
  }
};

function setNeighborsForEachCell(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].neighbors = getNeighborOfSingleCell(array[i]);
  }
};

function getNeighborOfSingleCell (cell) {
    var neighbors = [
        {
            xPos: cell.xPosition - Glb.cellWidth,
            yPos: cell.yPosition - Glb.cellHeight,
            coincidence: 0
        },
        {
            xPos: cell.xPosition,
            yPos: cell.yPosition - Glb.cellHeight,
            coincidence: 0
        },
        {
            xPos: cell.xPosition + Glb.cellWidth,
            yPos: cell.yPosition - Glb.cellHeight,
            coincidence: 0
        },
        {
            xPos: cell.xPosition - Glb.cellWidth,
            yPos: cell.yPosition,
            coincidence: 0
        },
        {
            xPos: cell.xPosition + Glb.cellWidth,
            yPos: cell.yPosition,
            coincidence: 0
        },
        {
            xPos: cell.xPosition - Glb.cellWidth,
            yPos: cell.yPosition + Glb.cellHeight,
            coincidence: 0
        },
        {
            xPos: cell.xPosition,
            yPos: cell.yPosition + Glb.cellHeight,
            coincidence: 0
        },
        {
            xPos: cell.xPosition + Glb.cellWidth,
            yPos: cell.yPosition + Glb.cellHeight,
            coincidence: 0
        }
    ];

    return neighbors;
};
