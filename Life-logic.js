var lifeLogic = {
    getMousePos: function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();

        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },

    getSelectedCells: function() {
        for (var i = 0; i < Glb.cellContainer.length; i++) {
            if (Glb.cellContainer[i].lifeStatus === true) {
                Glb.liveCells.push(Glb.cellContainer[i]);
            }
        }

        this.getAllNeighborsCells(Glb.liveCells);
    },

    getAllNeighborsCells: function(liveCells) {
        for (var i = 0; i < liveCells.length; i++) {
            this.getNeighborOfSingleCell(liveCells[i]);
        }

        this.lifeCycle(Glb.liveCells);
    },

    getNeighborOfSingleCell: function(cell) {
        cell.neighbors = [
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
    },

    getSelectedCell: function(coordinates) {
        for (var i = 0; i < Glb.cellContainer.length; i++) {
            if (coordinates.mousePosX > Glb.cellContainer[i].xPosition &&
                coordinates.mousePosX < Glb.cellContainer[i].xPosition + Glb.cellWidth) {

                if (coordinates.mousePosY > Glb.cellContainer[i].yPosition &&
                    coordinates.mousePosY < Glb.cellContainer[i].yPosition + Glb.cellHeight) {

                    this.drawSelectedCell(Glb.cellContainer[i]);
                }
            }
        }
    },

    drawSelectedCell: function(selectedCellData) {
        console.log(selectedCellData);
        for (var i = 0; i < Glb.cellContainer.length; i++) {
            if (Glb.cellContainer[i].xPosition === selectedCellData.xPosition &&
                Glb.cellContainer[i].yPosition === selectedCellData.yPosition) {
                if (Glb.cellContainer[i].lifeStatus === true) {
                    Glb.cellContainer[i].lifeStatus = false;
                } else {
                    Glb.cellContainer[i].lifeStatus = true;
                }

            }
        }

        if (selectedCellData.lifeStatus === true) {
            Glb.ctx.fillStyle = 'yellow';
        } else {
            Glb.ctx.fillStyle = 'white';
        }

        Glb.ctx.fillRect(selectedCellData.xPosition, selectedCellData.yPosition, Glb.cellWidth - 1, Glb.cellHeight - 1);
    },

    drawNewGeneration: function(arrey) {
        for (var i = 0; i < arrey.length; i++) {
            this.drawSelectedCell(arrey[i]);
        }
    },

    drawMainCanvas: function() {
        Glb.ctx.fillStyle = 'ff000';
        Glb.ctx.fillRect(0, 0, Glb.canvas.width, Glb.canvas.height);

        this.drawRects();
    },

    drawRects: function() {
        var ox = 0,
            oy = 0;

        for (var i = 0; i < Glb.matrix.length; i++) {
            for (var j = 0; j < Glb.matrix[i].length; j++) {

                var temporaryCell = new Cell.constructor(ox, oy);
                Glb.cellContainer.push(temporaryCell);

                if (Glb.matrix[i][j] === 0) {
                    Glb.ctx.fillStyle = 'white';
                } else {
                    Glb.ctx.fillStyle = 'green';
                }

                Glb.ctx.fillRect(ox, oy, Glb.cellWidth - 1, Glb.cellHeight - 1);

                if (ox < Glb.canvas.width - Glb.cellWidth) {
                    ox += Glb.cellWidth;
                } else {
                    oy += Glb.cellHeight;
                    ox = 0;
                }
            }
        }
    },

    lifeCycle: function (arrayOfLiveCells) {
        var newGeneration = [];
        var uniqueCells = [];

        for (var i = 0; i < arrayOfLiveCells.length; i++) {
            for (var j = 0; j < arrayOfLiveCells[i].neighbors.length; j++) {
                if (!uniqueCells.length) {
                    arrayOfLiveCells[i].neighbors[j].coincidence += 1;
                    uniqueCells.push(arrayOfLiveCells[i].neighbors[j]);
                } else {
                    var counter = 0;
                    for (var k = 0; k < uniqueCells.length; k++) {
                        if (arrayOfLiveCells[i].neighbors[j].xPos !== uniqueCells[k].xPos ||
                            arrayOfLiveCells[i].neighbors[j].yPos !== uniqueCells[k].yPos ) {
                            counter++;
                        } else {
                            uniqueCells[k].coincidence += 1;
                        }

                        if (counter === uniqueCells.length) {
                            uniqueCells.push(arrayOfLiveCells[i].neighbors[j]);
                        }
                    }
                }
            }
        }

        for (var g = 0; g < uniqueCells.length; g++) {
            if (uniqueCells[g].coincidence === 3) {
                newGeneration.push(uniqueCells[g]);
            }
        }

        this.drawNewGeneration(newGeneration);

        console.log('uniqueCells: ', newGeneration);
    }
};