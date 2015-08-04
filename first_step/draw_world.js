(function () {
  Glb.ctx.fillStyle = 'ff000';
  Glb.ctx.fillRect(0, 0, Glb.canvas.width, Glb.canvas.height);

  this.drawGeneration(Glb.matrix);
})();

function drawGeneration(array) {
  if (Glb.cellContainer.length) {
    console.log('1');
    for (var i = 0; i < array.length; i++) {
        if (array[i].lifeStatus) {
          Glb.ctx.fillStyle = 'green';
        } else {
          Glb.ctx.fillStyle = 'white';
        }

        Glb.ctx.fillRect(array[i].xPosition, array[i].yPosition, Glb.cellWidth - 1, Glb.cellHeight - 1);
    }
  } else {
    console.log('2');
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
  }
};
