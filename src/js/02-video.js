import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);
const keyStorage = 'videoplayer-current-time';
const currentTime = localStorage.getItem(keyStorage);

player.on('timeupdate', throttle(setTime, 1000));

function setTime(data) {
  localStorage.setItem(keyStorage, data.seconds);
}

player.setCurrentTime(currentTime);
