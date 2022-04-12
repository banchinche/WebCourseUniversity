
const factorial = () => {
    let number = document.getElementById("numberInputId").value
    result = 1
    do {
        result *= number
         number = number - 1
    } while (number > 0)

    document.getElementById("resultParagraphId").innerHTML = `factorial: ${result}`

}
