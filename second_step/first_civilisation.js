var FirstCivilisation = {
  getMousePos: function (canvas, evt) {
    var rect = canvas.getBoundingClientRect();

    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
  },

  getSelectedCell: function (coordinates) {
    for (var i = 0; i < Glb.cellContainer.length; i++) {
        if (coordinates.mousePosX > Glb.cellContainer[i].xPosition &&
            coordinates.mousePosX < Glb.cellContainer[i].xPosition + Glb.cellWidth) {

            if (coordinates.mousePosY > Glb.cellContainer[i].yPosition &&
                coordinates.mousePosY < Glb.cellContainer[i].yPosition + Glb.cellHeight) {
                return Glb.cellContainer[i];
            }
        }
    }
  }
};

Glb.canvas.addEventListener('click', function(evt) {
    var mousePos = FirstCivilisation.getMousePos(Glb.canvas, evt);

    var coordinates = {
        mousePosX: mousePos.x,
        mousePosY: mousePos.y
    };

    var selectedCell = FirstCivilisation.getSelectedCell(coordinates);
    Glb.drawSelectedCell(selectedCell);
}, false);
