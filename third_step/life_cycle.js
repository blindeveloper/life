var lifeLogic = {

    getSelectedCells: function() {
      // console.log('Glb.cellContainer: ', Glb.cellContainer);
      // return;

        for (var i = 0; i < Glb.cellContainer.length; i++) {
            if (Glb.cellContainer[i].lifeStatus === true) {
                Glb.liveCells.push(Glb.cellContainer[i]);
            }
        }

        this.lifeCycle(Glb.liveCells);
    },

    drawNewGeneration: function(arrey) {
        for (var i = 0; i < arrey.length; i++) {
            arrey[i].lifeStatus = true;
            console.log('fff: ', Glb.cellContainer);

            Glb.drawSelectedCell(arrey[i]);
        }
    },

    lifeCycle: function (arrayOfLiveCells) {
      console.log('arrayOfLiveCells: ', arrayOfLiveCells);
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

                //is dead?
                //console.log('a: ', arrayOfLiveCells[i].neighbors);
                //console.log('b: ', arrayOfLiveCells);
                //if (arrayOfLiveCells[i].neighbors[j].xPos === arrayOfLiveCells[i].xPosition &&
                //    arrayOfLiveCells[i].neighbors[j].yPos === arrayOfLiveCells[i].yPosition) {
                //    console.log('dead: ', arrayOfLiveCells[i]);
                //}
            }
        }

        for (var g = 0; g < uniqueCells.length; g++) {
            if (uniqueCells[g].coincidence === 3) {
                newGeneration.push(new Cell.constructor(uniqueCells[g].xPos, uniqueCells[g].yPos));
            }
        }

        this.drawNewGeneration(newGeneration);

        console.log('newGeneration: ', newGeneration);
    }
};
