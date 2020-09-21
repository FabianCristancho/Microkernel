exports.applyTemplate = function (doc, figure){
    var imagePath ='../app/public/img/' + figure + '.png';
    console.log(imagePath);
    var width = 602;
    var margin = 10;
    var fwidth = 100;


    drawBorderFigure(doc,imagePath, margin, margin,100, width);

    for (var i = 0; i < 22; i++) {
    	 drawBorderFigure (doc,imagePath, margin, margin + 82 + margin * (i + 1) + 21 * i, 25, width);
    }

    for (var i = 1; i < 11; i++) {
    	 drawFigure(doc,imagePath, (margin + 43) * i, margin + 82 + margin * 22 + 21 * 21, 25, width);
    }

    for (var i = 1; i < 8; i++) {
    	 drawFigure(doc,imagePath, 80 + (margin + 43) * i, margin, 25, width);
    }
};



function drawBorderFigure(doc, imagePath, margin, vmargin, fwidth, width){
    doc.image(imagePath, margin , vmargin, {width: fwidth});
    doc.image(imagePath, width - fwidth, vmargin, {width: fwidth});
}

function drawFigure(doc, imagePath, margin, vmargin, fwidth, width){
    doc.image(imagePath, margin , vmargin, {width: fwidth});
}