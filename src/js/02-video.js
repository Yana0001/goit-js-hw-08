import Player from '@vimeo/player';
import ??? from 'lodash.throttle';

// ІНІЦІАЛІЗАЦІЯ-----------------------------------------------
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// ON-----------------------------------------------------------
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

// ВІДСТЕЖУВАТИ ПОДІЮ-------------------------------------------
// player.on('play', onPlay);
player.on('eventName', function (data) {
  // data is an object containing properties specific to that event
});

// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time"

// ВІДТВОРЕННЯ ЗІ ЗБЕРЕЖЕНОЇ ПОЗИЦІЇ-------------------------------
player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });