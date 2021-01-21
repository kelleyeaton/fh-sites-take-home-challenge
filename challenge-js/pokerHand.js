
var cardSuit = ["s", "d", "h", "c"];
var cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var card = [cardSuit, cardValue];
var cardDeck = [][cardSuit, cardValue], [cardSuit, cardValue], [cardSuit, cardValue], [cardSuit, cardValue], [cardSuit, cardValue]];

// sort cardValue in ascending order - will sort numbers but won't sort letters
cardValue.sort(function(a,b) {
  return a - b;
});


class PokerHand {
  constructor(suit,value) {
    this.cardSuit = suit;
    this.cardValue = value;
  }

  getRank() {
    if (cardSuit == cardSuit == cardSuit == cardSuit == cardSuit) && (cardValue == "A") {
      then  return "Royal Flush";
    } else if (cardSuit /* if all suits are the same */) && (/* cardValue are in chronological order */) {
      then return "Straight Flush";
    } else if (cardSuit /* if all suits are the same */) {
      then return "Flush";
    } else if (/* cardValue * 4 are the same*/) {
      then return "Four of a Kind";
    } else if (/* cardValue * 2 are the same*/) && (/* cardValue * 3 are the same*/) {
      then return "Full House";
    } else if (/* cardValue are in chronological order */) {
      then return "Straight";
    } else if (/* cardValue * 3 are the same*/) {
      then return "Three of a Kind";
    } else if (/* cardValue * 2 are the same*/) && (/* cardValue * 2 are the same*/) {
      then return "Two Pair";
    } else if (/* cardValue * 2 are the same*/) {
      then return "One Pair";
    } else return "High Card: " + cardValue.sort();
  }
}

module.exports = PokerHand;

