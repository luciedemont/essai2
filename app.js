import Deck from "./deck.js"; // On importe la classe Deck du module deck.js

const options = {
  // Objet contenant les options comme demandé dans la consigne
  values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
  suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

// On crée un nouveau deck avec comme paramètre notre objet options
// On appelle ensuite la fonction createFullDeck() qui va créer toutes les cartes composant notre Deck
// Puis la fonction shuffle() qui va mélanger toutes les cartes
// Et finalement displayCards() qui va les afficher dans notre navigateur
new Deck(options).createFullDeck().shuffle().displayCards();
// Cette syntaxe est possible grâce aux return this sinon on pourrait pas enchainer les méthodes comme ça
