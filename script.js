function createGrid(squaresPerSide) {

    if (squaresPerSide < 1) console.log(`${squaresPerSide} is minor than zero.`)
    if (typeof squaresPerSide != "number") console.log(`${squaresPerSide} isn't a number.`);
    

    let squaresContainerDivElement = document.createElement("div");
    squaresContainerDivElement.style["height"] = "90vh";
    squaresContainerDivElement.style["width"] = "90vh";

    let paintBlack = (e) => {e.target.style["background-color"] = "black"};
    squaresContainerDivElement.addEventListener("mouseover", paintBlack);

    let numberOfRequiredSquares = squaresPerSide ** 2;
    let sizeOfEachSquare = `${90 / squaresPerSide}vh`;
    for (let i = 0; i < numberOfRequiredSquares; i++) {
        let newSquareDivElement = document.createElement("div");
        
        newSquareDivElement.style["height"] = sizeOfEachSquare;
        newSquareDivElement.style["aspectRatio"] = "1/1";

        squaresContainerDivElement.appendChild(newSquareDivElement);
    }

    squaresContainerDivElement.style["display"] = "flex";
    squaresContainerDivElement.style["flex-wrap"] = "wrap";

    return squaresContainerDivElement;
}

function replaceCurrentGrid(oldGrid, newGridSize) {
    let newGrid = createGrid(newGridSize);
    oldGrid.after(newGrid);
    
    oldGrid.remove();

    return newGrid;
}

let grid16x16DivElement = createGrid(16);
document.body.appendChild(grid16x16DivElement);

let createNewGridButtonElement = document.querySelector("#createNewGridButton");
createNewGridButtonElement.addEventListener("click", () => {grid16x16DivElement = replaceCurrentGrid(grid16x16DivElement, 16)});