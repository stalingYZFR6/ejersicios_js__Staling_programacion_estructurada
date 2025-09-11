const partidos = [
  {
    juego: 1,
    LosToros: 0,
    SanFernando: 1,
  },
  {
    juego: 2,
    LosToros: 2,
    SanFernando: 2,
  },
  {
    juego: 3,
    LosToros: 3,
    SanFernando: 1,
  },
  {
    juego: 4,
    LosToros: 1,
    SanFernando: 4,
  },
  {
    juego: 5,
    LosToros: 0,
    SanFernando: 0,
  },
  {
    juego: 6,
    LosToros: 2,
    SanFernando: 1,
  },
  {
    juego: 7,
    LosToros: 3,
    SanFernando: 3,
  },
];

const numPartidos = partidos.length;

for(let i = 0; i < numPartidos; i++){
  let p = partidos.shift();
  console.log(`Resultado del partido ${p.juego}: Los Toros  ${p.LosToros} - San Fernando  ${p.SanFernando}`);
}

// Resultado del partido 1
console.log(`// Resultado del partido 1: LosToros ${partidos[0].LosToros} - SanFernando ${partidos[0].SanFernando} -> ${partidos[0].LosToros > partidos[0].SanFernando ? "LosToros ganaron" : partidos[0].SanFernando > partidos[0].LosToros ? "SanFernando ganó" : "Empate"}`);

// Resultado del partido 2
console.log(`// Resultado del partido 2: LosToros ${partidos[1].LosToros} - SanFernando ${partidos[1].SanFernando} -> ${partidos[1].LosToros > partidos[1].SanFernando ? "LosToros ganaron" : partidos[1].SanFernando > partidos[1].LosToros ? "SanFernando ganó" : "Empate"}`);

// Resultado del partido 3
console.log(`// Resultado del partido 3: LosToros ${partidos[2].LosToros} - SanFernando ${partidos[2].SanFernando} -> ${partidos[2].LosToros > partidos[2].SanFernando ? "LosToros ganaron" : partidos[2].SanFernando > partidos[2].LosToros ? "SanFernando ganó" : "Empate"}`);

// Resultado del partido 4
console.log(`// Resultado del partido 4: LosToros ${partidos[3].LosToros} - SanFernando ${partidos[3].SanFernando} -> ${partidos[3].LosToros > partidos[3].SanFernando ? "LosToros ganaron" : partidos[3].SanFernando > partidos[3].LosToros ? "SanFernando ganó" : "Empate"}`);

// Resultado del partido 5
console.log(`// Resultado del partido 5: LosToros ${partidos[4].LosToros} - SanFernando ${partidos[4].SanFernando} -> ${partidos[4].LosToros > partidos[4].SanFernando ? "LosToros ganaron" : partidos[4].SanFernando > partidos[4].LosToros ? "SanFernando ganó" : "Empate"}`);

// Resultado del partido 6
console.log(`// Resultado del partido 6: LosToros ${partidos[5].LosToros} - SanFernando ${partidos[5].SanFernando} -> ${partidos[5].LosToros > partidos[5].SanFernando ? "LosToros ganaron" : partidos[5].SanFernando > partidos[5].LosToros ? "SanFernando ganó" : "Empate"}`);

// Resultado del partido 7
console.log(`// Resultado del partido 7: LosToros ${partidos[6].LosToros} - SanFernando ${partidos[6].SanFernando} -> ${partidos[6].LosToros > partidos[6].SanFernando ? "LosToros ganaron" : partidos[6].SanFernando > partidos[6].LosToros ? "SanFernando ganó" : "Empate"}`);