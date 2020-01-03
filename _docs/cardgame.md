---
layout: document
title: Symbol Matching Game
date: 03/01/2020
tag: math
---

There is a game, shown [here][1], that is tricky to construct. The game consists on a
deck of cards. All the cards show a fixed number of symbols, coming from a pool of
possible symbols. For any two cards that you pick, they share one, and only one,
symbol in common, in that case we will say that this is a *valid game*.

As an example, a valid game can be constructed using three total symbols (let's say
pear, apple, and orange), and two symbols per card. The cards of the deck will be:

    (pear, apple), (apple, orange), (pear, orange)

Additionaly, we can also define a *full game*, as a valid game that also follows:

1. For each card, all the symbols in the card can be matched with at least another card.
2. The role of each symbol is indistinguishable.
3. The game is the largest game possible that can be assembled with the ammount of symbols.

These previous conditions might be redundant. The example provided before is also a full
game.

Now the question is as follows: given the number of symbols per card, how many different
symbols are required, and how many cards are produced, to construct a full game?

For two symbols per card, it is already shown in the example behind. For three symbols
per card, it is required to have 7 different symbols and also 7 cards are constructed.

[1]: https://www.teacherspayteachers.com/Product/FOOD-Matching-Game-Shout-Out-Word-of-Wisdom-3-5-box-Spot-the-Match-2930989
