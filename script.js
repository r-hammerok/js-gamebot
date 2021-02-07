'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
  // Число, загаданное ботом
  const botNumber = Math.ceil(Math.random() * 99);
  // Знать, какое число бот загадал
  console.log('Бот загадал: ' + botNumber);

  const geussing = function() {
    const answer = prompt('Угадай число от 1 до 100');

    if (answer === null) {
      alert('Игра закончена');
      return;
    }

    if (!isNumber(answer)) {
      alert('Введи число!');
      geussing();
    }

    if (+answer > botNumber) {
      alert('Загаданное число меньше');
      geussing();
    }
    if (+answer < botNumber) {
      alert('Загаданное число больше');
      geussing();
    }
    if (+answer === botNumber) {
      alert('Поздравляю, Вы угадали!!!');
      return;
    }

  };

  geussing();  

};

game();

