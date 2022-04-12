const drawRectangle = (width, height) => {
    let line = '';
    for (var i = 0; i < height; ++i) {
        if (i == 0 || i == height - 1) {    
          for (let j = 0; j < width; ++j) {
            line += '*';
          }
        } else {
            line += '*';
            for (let j = 0; j < width-2 ; ++j) {
                line += ' ';
            }    
            line += '*';
        }
        line += '\n';
    }
    line += '\n';
    return line
}

console.log(drawRectangle(15, 5));
