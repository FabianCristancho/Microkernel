function random(inferior,superior){
     let numPosibilities = superior - inferior
     let aleat = Math.random() * numPosibilities
     aleat = Math.floor(aleat)
     return parseInt(inferior) + aleat
}

exports.randomColor = () => {
     let hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
     let color_random = "#";
     
     for (var i=0;i<6;i++){
        let posarray = random(0,hexadecimal.length);
        color_random += hexadecimal[posarray];
     }
     return color_random;
}