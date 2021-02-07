'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
  // Число, загаданное ботом
  const botNumber = Math.ceil(Math.random() * 99);
  // Знать, какое число бот загадал
  console.log('Бот загадал: ' + botNumber);
  // Максимальное количество попыток
  const maxAttempts = 10;

  const guessing = function(attempts) {

    if (attempts === 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        game();
      }
      return;
    }

    const answer = prompt('Угадай число от 1 до 100');

    if (answer === null) {
      alert('Игра закончена');
      return;
    }

    if (!isNumber(answer)) {
      alert('Введи число!');
      guessing(attempts);
    }

    if (+answer > botNumber) {
      alert(`Загаданное число меньше, осталось попыток ${--attempts}`);
      guessing(attempts);
    }
    if (+answer < botNumber) {
      alert(`Загаданное число больше, осталось попыток ${--attempts}`);
      guessing(attempts);
    }
    if (+answer === botNumber) {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
        game();
      }
      return;
    }

    return;
  };

  guessing(maxAttempts);
};

game();

