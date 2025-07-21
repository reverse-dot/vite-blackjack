import _ from "underscore";

// export const miNombre = "Pepe";

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<string>} tiposDeCarta ["C", "D", "H", "S"]
 * @param {Array<string>} tiposEspeciales ["A", "J", "Q", "K"]
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || !tiposDeCarta.length === 0)
    throw new Error("TiposDeCarta tiene que ser un arreglo de string");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};

// export default crearDeck;
