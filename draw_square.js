class Square {
    #sideLength;
    #borderColor;
    #backgroundColor;

    constructor(sideLength, borderColor, backgroundColor) {
      this.#sideLength = sideLength;
      this.#borderColor = borderColor;
      this.#backgroundColor = backgroundColor;
    }

    draw() {
      const squareContainer = document.getElementById('container');
      squareContainer.innerHTML = `
        <div style="
          width: ${this.#sideLength}px;
          height: ${this.#sideLength}px;
          border: 1px solid ${this.#borderColor};
          background-color: ${this.#backgroundColor};
        "></div>
      `;
    }
  }

  const drawSquareButton = document.getElementById('draw-button');

  drawSquareButton.addEventListener('click', () => {
    const sideLength = document.getElementById('side-length').value;
    const borderColor = document.getElementById('border-color').value;
    const backgroundColor = document.getElementById('background-color').value;

    const square = new Square(sideLength, borderColor, backgroundColor);
    square.draw(); 
  });