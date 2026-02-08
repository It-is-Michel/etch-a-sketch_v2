function createGrid(squaresPerSide) {

    if (squaresPerSide < 1) console.log(`${squaresPerSide} is minor than zero.`)
    if (typeof squaresPerSide != "number") console.log(`${squaresPerSide} isn't a number.`);
    

    let squaresContainerDivElement = document.createElement("div");
    squaresContainerDivElement.style["height"] = "90vh";
    squaresContainerDivElement.style["width"] = "90vh";

    let numberOfRequiredSquares = squaresPerSide ** 2;
    for (let i = 0; i < numberOfRequiredSquares; i++) {
        let newSquareDivElement = document.createElement("div");
        squaresContainerDivElement.appendChild(newSquareDivElement);
    }

    return squaresContainerDivElement;
}