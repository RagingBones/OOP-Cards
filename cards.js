class Card {
  // public class fields in Chrome since V72. In Firefox: experimental feature
  type = Card.TYPE_NORMAL;
  style;
  back;
  
  constructor(type, suit, rank) {
    this.type = type;
    if (type == Card.TYPE_NORMAL) {
      this.suit = suit;
      this.rank = rank;
    }
  }

  toString() {
    return `Suit: ${this.suit}, rank: ${this.rank}`;
  }

  isNormal() {
    return this.type == Card.TYPE_NORMAL;
  }

  isJoker() {
    return this.type == Card.TYPE_JOKER;
  }
}

Card.TYPE_NORMAL = 0;
Card.TYPE_JOKER = 1;
Card.SUIT_HEARTS = 0;
Card.SUIT_SPADES = 1;
Card.SUIT_CLUBS = 2;
Card.SUIT_DIAMONDS = 3;

class CardSet {
  cards = [];

  addCard(card) {
    this.cards.push(card);
  }

  get count() {
    return this.cards.length;
  }

  getRandomSet(count) {
    // Makes a new CardSet object
    // Fills it with <count> random cards from the current set
    // Removes these cards from the current set
    // Returns the new set
  }
}

CardSet.standardPack = (withJokers) => {
  let cardSet = new CardSet();
  let suits = [
    Card.SUIT_HEARTS,
    Card.SUIT_SPADES,
    Card.SUIT_CLUBS,
    Card.SUIT_DIAMONDS
  ];
  suits.forEach((suit) => {
    for (let rank = 1; rank <= 13; rank++) {
        cardSet.addCard(new Card(Card.TYPE_NORMAL, suit, rank));
    }
  });
  if (withJokers) {
    cardSet.addCard(new Card(Card.TYPE_JOKER));
    cardSet.addCard(new Card(Card.TYPE_JOKER));  
  }
  return cardSet;
}
