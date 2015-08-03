var lifeLogic = {
  cellsForReborn: [],
  cellsForDie: [],
  lifeCycle2: function () {
    for (var i = 0; i < Glb.cellContainer.length; i++) {
      this.setCellsStats(Glb.cellContainer[i]);
    }

    this.cycleOfLife(lifeLogic.cellsForReborn);
    this.cycleOfDeath(lifeLogic.cellsForDie);

    drawGeneration(Glb.cellContainer);
  },

  setCellsStats: function (cell) {
    var temporaryCellContainer = [];
    var temporaryCellContainer2 = [];

      for (var j = 0; j < Glb.cellContainer.length; j++) {

        if (Glb.cellContainer[j].xPosition === cell.xPosition - Glb.cellWidth &&
            Glb.cellContainer[j].yPosition === cell.yPosition - Glb.cellHeight) {

              if (cell.lifeStatus) {
                temporaryCellContainer2.push(Glb.cellContainer[j]);
              } else {
                temporaryCellContainer.push(Glb.cellContainer[j]);
              }

        }

        if (Glb.cellContainer[j].xPosition === cell.xPosition &&
            Glb.cellContainer[j].yPosition === cell.yPosition - Glb.cellHeight) {

              if (cell.lifeStatus) {
                temporaryCellContainer2.push(Glb.cellContainer[j]);
              } else {
                temporaryCellContainer.push(Glb.cellContainer[j]);
              }
        }

        if (Glb.cellContainer[j].xPosition === cell.xPosition + Glb.cellWidth &&
            Glb.cellContainer[j].yPosition === cell.yPosition - Glb.cellHeight) {

              if (cell.lifeStatus) {
                temporaryCellContainer2.push(Glb.cellContainer[j]);
              } else {
                temporaryCellContainer.push(Glb.cellContainer[j]);
              }
        }

        if (Glb.cellContainer[j].xPosition === cell.xPosition - Glb.cellWidth &&
            Glb.cellContainer[j].yPosition === cell.yPosition) {

              if (cell.lifeStatus) {
                temporaryCellContainer2.push(Glb.cellContainer[j]);
              } else {
                temporaryCellContainer.push(Glb.cellContainer[j]);
              }
        }

        if (Glb.cellContainer[j].xPosition === cell.xPosition + Glb.cellWidth &&
            Glb.cellContainer[j].yPosition === cell.yPosition) {

              if (cell.lifeStatus) {
                temporaryCellContainer2.push(Glb.cellContainer[j]);
              } else {
                temporaryCellContainer.push(Glb.cellContainer[j]);
              }
        }

        if (Glb.cellContainer[j].xPosition === cell.xPosition - Glb.cellWidth &&
            Glb.cellContainer[j].yPosition === cell.yPosition + Glb.cellHeight) {

              if (cell.lifeStatus) {
                temporaryCellContainer2.push(Glb.cellContainer[j]);
              } else {
                temporaryCellContainer.push(Glb.cellContainer[j]);
              }
        }

        if (Glb.cellContainer[j].xPosition === cell.xPosition &&
            Glb.cellContainer[j].yPosition === cell.yPosition + Glb.cellHeight) {

              if (cell.lifeStatus) {
                temporaryCellContainer2.push(Glb.cellContainer[j]);
              } else {
                temporaryCellContainer.push(Glb.cellContainer[j]);
              }
        }

        if (Glb.cellContainer[j].xPosition === cell.xPosition + Glb.cellWidth &&
            Glb.cellContainer[j].yPosition === cell.yPosition + Glb.cellHeight) {

              if (cell.lifeStatus) {
                temporaryCellContainer2.push(Glb.cellContainer[j]);
              } else {
                temporaryCellContainer.push(Glb.cellContainer[j]);
              }
        }

      }

      if (temporaryCellContainer2.length) {
        if (this.getQuantityOfliveNeighgors(temporaryCellContainer2) === 3 ||
            this.getQuantityOfliveNeighgors(temporaryCellContainer2) === 2) {

          lifeLogic.cellsForReborn.push(cell);
        } else {
          lifeLogic.cellsForDie.push(cell);
        }
      }

      if (this.getLiveCellsNeighbors(temporaryCellContainer) === 3) {
        lifeLogic.cellsForReborn.push(cell);
      }
  },

  getLiveCellsNeighbors: function (array) {
    var counter = 0;

    for (var i = 0; i < array.length; i++) {
      if (array[i].lifeStatus) {
        counter++;
      }
    }

    return counter;
  },

  getQuantityOfliveNeighgors: function (array) {
    var counter2 = 0;

    for (var i = 0; i < array.length; i++) {
      if (array[i].lifeStatus) {
        counter2++;
      }
    }

    return counter2;
  },

  cycleOfLife: function (array) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < Glb.cellContainer.length; j++) {
        if (array[i].xPosition === Glb.cellContainer[j].xPosition &&
            array[i].yPosition === Glb.cellContainer[j].yPosition) {
          Glb.cellContainer[j].lifeStatus = true;
        }
      }
    }
  },

  cycleOfDeath: function (array) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < Glb.cellContainer.length; j++) {
        if (array[i].xPosition === Glb.cellContainer[j].xPosition &&
            array[i].yPosition === Glb.cellContainer[j].yPosition) {
          Glb.cellContainer[j].lifeStatus = false;
        }
      }
    }
  }

}
