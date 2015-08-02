var Glb = {
    canvas : document.getElementById('lifeCanvas'),
    lifeRunner : document.getElementById('lifeRunner'),
    cellContainer : [],
    liveCells : [],
    matrix: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ]
};

Glb.ctx = Glb.canvas.getContext('2d');

Glb.canvas.width = 200;
Glb.canvas.height = 200;

Glb.cellWidth = Glb.canvas.width / Glb.matrix.length;
Glb.cellHeight = Glb.canvas.height / Glb.matrix.length;

Glb.drawSelectedCell = function(selectedCellData) {
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
};

Glb.lifeRunner.addEventListener('click', function () {
    Glb.liveCells = [];
    lifeLogic.getSelectedCells();
});
