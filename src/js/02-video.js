import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('iframe');
const player = new Player(video);

const updateCurrentTime = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(updateCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
