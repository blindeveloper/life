Glb.ctx = Glb.canvas.getContext('2d');

Glb.canvas.width = 200;
Glb.canvas.height = 200;

Glb.cellWidth = Glb.canvas.width / Glb.matrix.length;
Glb.cellHeight = Glb.canvas.height / Glb.matrix.length;

Glb.canvas.addEventListener('click', function(evt) {
    var mousePos = lifeLogic.getMousePos(Glb.canvas, evt);

    var coordinates = {
        mousePosX: mousePos.x,
        mousePosY: mousePos.y
    };

    lifeLogic.getSelectedCell(coordinates, Glb.cellContainer);
}, false);

Glb.lifeRunner.addEventListener('click', function () {
    Glb.liveCells = [];
    lifeLogic.getSelectedCells();
});

lifeLogic.drawMainCanvas();