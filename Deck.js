import Card from "./card.js"; // On importe la classe Card du module card.js
import shuffle from "./node_modules/lodash-es/shuffle.js"; // on importe la fonction shuffle du module shuffle.js de la librairie lodash

class Deck {
  // On crée une classe pour gérer un deck
  #cards = []; // propriété cards privée et contenant un tableau initialement vide

  constructor(options) {
    // Constructeur d'un deck avec un objet options entant que paramètre (l'objet est déclaré dans app.js comme demandé)
    this.values = options.values; // on récupère la valeur de values contenue dans options et la met dans la propriété values de la classe Deck
    this.suits = options.suits; // pareil pour suits
  }

  createFullDeck() {
    // Fonction permettant de créer un jeu de cartes
    this.values.forEach((v) => {
      // Pour chaque valeur (as, roi, reine, valet, etc..) nommée v ...
      this.suits.forEach((s) => {
        // Et pour chaque suite (coeur, pique, etc...) nommée s ...
        this.#cards.push(new Card(v, s)); // On crée une carte de valeur v et de suite s qu'on ajoute directement au tableau #cards
      }); // -> on crée donc, par exemple, as de coeur puis as de pique, puis as de ... puis roi de coeur puis roi de pique puis ...
    }); // -> On se retrouve donc avec un jeu de cartes complet avec que des cartes uniques
    return this; // Et on retourne le jeu de cartes contenu dans #cards
  }

  shuffle() {
    // On récupère le tableau #cards contenant toutes les cartes
    this.#cards = shuffle(this.#cards); // et on le mélange grâce à la fonction récupérée du module shuffle.js de la librairie lodash
    return this; // On retourne le tableau #cards mélangé
  }

  displayCards() {
    // Fonction permettant d'afficher les cartes
    this.#cards.forEach((c) => {
      // Pour chaque carte contenue dans le tableau #cards et nommée ici c
      c.display(); // On appelle la fonction display grâce à la fontion récupérée dans la classe Card du module Card.js
    });
    return this; // Et on retourne le résultat
  }
}

export default Deck; // On exporte la classe Deck
