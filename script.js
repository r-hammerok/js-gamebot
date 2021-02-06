'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
  // Число, загаданное ботом
  let botNumber;

  // Максимальное количество попыток
  let maxAttempts = 10;

  // Причина выхода из рекурсии
  // 1 - закончились попытки
  // 2 - отгадал число
  // 0 - нажал Отмена
  let whyReturn = 0;

  const guessing = function(attempts) {

    if (attempts === 0) {
      whyReturn = 1;
      return;
    }

    const answer = prompt('Угадай число от 1 до 100');

    if (answer === null) {
      alert('Игра закончена');
      whyReturn = 0;
      return;
    }

    if (!isNumber(answer)) {
      alert('Введи число!');
      guessing(attempts);
    }

    if (+answer > botNumber) {
      alert('Загаданное число меньше, осталось попыток ' + --attempts);
      guessing(attempts);
    } else if (+answer < botNumber) {
      alert('Загаданное число больше, осталось попыток ' + --attempts);
      guessing(attempts);
    } else if (+answer === botNumber) {
      whyReturn = 2;
      return;
    }

    return;
  };

  let anew;
  
  do {
    botNumber = Math.ceil(Math.random() * 99);
    // Знать, какое число бот загадал
    console.log('Бот загадал: ' + botNumber);
    guessing(maxAttempts);

    switch (whyReturn) {
      case 1:
        anew = confirm('Попытки закончились, хотите сыграть еще?');
        break;
      case 2:
        anew = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        break;
      default:
        anew = false;
    }
    
  } while (anew);

};

game();

