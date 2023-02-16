import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// ІНІЦІАЛІЗАЦІЯ-----------------------------------------------
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// ON-----------------------------------------------------------
const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

// ВІДСТЕЖУВАТИ ПОДІЮ-------------------------------------------
player.on('timeupdate', throttle(onPlay, 1000));
const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

// ВІДТВОРЕННЯ ЗІ ЗБЕРЕЖЕНОЇ ПОЗИЦІЇ----------------------------
player
  .setCurrentTime(currentTime)
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
