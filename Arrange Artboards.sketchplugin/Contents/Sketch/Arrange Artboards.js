// Arrange Artboards Plugin
/*
  Author: Ken Moore
  Layout all artboards neatly in a grid with user-specified number of rows.
*/

var arrangeArtboards = function(context) {
  var doc = context.document;

  var page = [doc currentPage];
  var artboards = [page artboards];
  var count = [artboards count];
  var x = 0;
  var y = 0;

  // Prompt user for number of rows
  var rows = [doc askForUserInput:"How many rows?" initialValue: 1];
  var numPerRow = Math.ceil(count / rows);
  var maxHeight = 0;

  for (var i = 0; i < count; i++) {
    var artboard = [artboards objectAtIndex: i];
    var frame = [artboard frame];

    frame.x = x;
    frame.y = y;

    // Keep track of the tallest artboard in this row
    if ([frame height] > maxHeight) {
      maxHeight = [frame height];
    }

    if ((i + 1) % numPerRow == 0) {
      // If last artboard in this row, reset x and calculate the y position of the next row
      x = 0;
      y += maxHeight + 200;
      maxHeight = 0;
    } else {
      x += [frame width] + 100;
    }
  }
}

