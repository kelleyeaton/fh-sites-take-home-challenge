class PokerHand {
  constructor(hand) {
    this.hand = hand;
  }

  getRank() {
    var cards = this.hand.split(' ');         // ['As', 'Ks', 'Qs', 'Js', '10s']
    var cardObjects = [];
    // Loop through each card in the array
    for (var i = 0; i < cards.length; i++) {
      var value = parseInt(cards[i]);
      var card = {};
      // Does the card string contain a number?
      if (Number.isInteger(value)) {
        card.rank = value;
      }
      else {
        card.rank = cards[i][0];
      }
      // now get the suit
      var suit = cards[i].charAt(cards[i].length - 1);
      card.suit = suit;
      cardObjects.push(card);
    }
    console.log(cardObjects);
    // console.log(cardObjects[1].rank); to get individual ranks
    // compare ranks and suits
    // find all suits
    for (var c = 0; c < cardObjects.length; c++) {
      var cardSuits = [];
      cardSuits.push(cardObjects[c].suit);
    }
  }
}
    // determine if all suits are equal (Flush)
    // find all ranks
    // determine if ranks are A, K, Q, J, 10 for Royal Flush


module.exports = PokerHand;
