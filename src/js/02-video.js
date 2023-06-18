import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const body = document.querySelector('body');
const video = document.querySelector('iframe');
const player = new Player(video);

const updateCurrentTime = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(updateCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

video.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
video.style.borderRadius = '10px';
