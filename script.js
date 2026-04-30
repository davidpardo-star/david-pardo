let turno = "X";
let tablero = document.getElementById("tablero");
let estado = document.getElementById("estado");
let celdas = [];
let juegoActivo = true;

function crearTablero() {
  tablero.innerHTML = "";
  celdas = [];

  for (let i = 0; i < 9; i++) {
    let cuadro = document.createElement("div");
    cuadro.className = "cuadro";

    cuadro.onclick = function() {
      if (cuadro.textContent == "" && juegoActivo) {
        cuadro.textContent = turno;
        celdas[i] = turno;

        if (ganador()) {
          estado.textContent = "Ganó " + turno;
          juegoActivo = false;
        } else {
          turno = turno == "X" ? "O" : "X";
          estado.textContent = "Turno: " + turno;
        }
      }
    };

    tablero.appendChild(cuadro);
    celdas.push("");
  }
}

function ganador() {
  let comb = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return comb.some(c => {
    return celdas[c[0]] &&
           celdas[c[0]] == celdas[c[1]] &&
           celdas[c[1]] == celdas[c[2]];
  });
}

function reiniciar() {
  turno = "X";
  estado.textContent = "Turno: X";
  juegoActivo = true;
  crearTablero();
}

crearTablero();