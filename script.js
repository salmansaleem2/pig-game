'use strict';

//Selecting Element
const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score1El.textContent = 0;
score2El.textContent = 0;
dice.classList.add('hidden');

// Rolling Dice functionalities
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  // 2. Display dice
  // 3.Check for rolled 1: if true, switch to next player
});
