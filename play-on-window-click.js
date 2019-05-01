//play-pause-on-window-click
AFRAME.registerComponent('play-on-window-click', {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener('click', this.onClick);
  },
  pause: function () {
    window.removeEventListener('click', this.onClick);
  },
  onClick: function (evt) {
    var video = this.el.components.material.material.map.image;
    if (!video) { return; }
    video.play();
  }
});

// var videoEl = document.querySelector('#my-video');
// videoEl.currentTime = 122;  // Seek to 122 seconds.
// videoEl.pause();
