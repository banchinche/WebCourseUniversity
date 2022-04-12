const drawRightTriangle = () => {
    let line = "*"
    while (line.length < 8) { 
        document.write(line)
        line += "*"
        document.write("<br>")
    }

    document.write("<br>")
}

const drawEquilateralTriangle = () => {
    const n = "&nbsp"
    for (let i = 0; i < 8; i++) {
        for (let k = 8; k > i - 1; k--) {
            document.write(n, n)
        }

        for (let j = 0; j < i + 1; j++) {
            document.write("*", n, n)
        }
        
        document.write("<br>")
    }

    document.write("<br>")
}
const drawRectangle = () => {
    const width = 15
    const height = 5
    for (var i = 0; i < height; ++i) {
        if (i == 0 || i == height - 1) {    
          for (let j = 0; j < width; ++j) {
            document.write("*")
          }
        } else {
            document.write("*")
            for (let j = 0; j < width-2 ; ++j) {
                document.write("&nbsp ")
            }    

            document.write("*")
        }

        document.write("<br>")
    }

    document.write("<br>")
}

const drawRhombus = () => {
    let h = 5;

    for (let i = -h; i <= h; i++) {
        for (let j = -h; j <= h; j++) {
            if (Math.abs(i) + Math.abs(j) == h) {
                document.write("*")
            } else {
                document.write("&nbsp")
            }
        }
        document.write("<br>")
    }

    document.write("<br>")
}
