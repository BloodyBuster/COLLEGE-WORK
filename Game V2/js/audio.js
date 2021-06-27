
const audio = (function() {
  const music = {
    'menu': null,
    'gainNodeMenu': null,
    'game': null,
    'gainNodeGame': null
  };
  const sounds = {
    'explosionSound': 2,
    'playerHit': 3,
    'hitSound': 4,
    'laserSound': 5,
    'coinSound': 6,
    'cureSound': 7,
    'attkSpdSound': 8,
    'nukeSound': 9,
  }
  let cotext = null;
  let bufferLoader = null;
  let bufferList = [];
  function init() {
    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
  
    bufferLoader = new BufferLoader(
      context,
      [
        'SFX/agp-ambient-reality-pad-4.ogg',
        'SFX/planetjazzbass-the-death-of-gagarin.ogg',
        'SFX/explosion.mp3',
        'SFX/hurt.wav',
        'SFX/hit.wav',
        'SFX/laser.wav',
        'SFX/coin.wav',
        'SFX/cure.wav',
        'SFX/alert.wav',
        'SFX/nuke.wav',
      ],
      finishedLoading
    );
  
    bufferLoader.load();
  }

  function finishedLoading(bufferedList) {
    bufferList = bufferedList;
    //createAudio();
    //music.menu.start();
  }

  function createAudio() {
    music.menu = context.createBufferSource();
    music.gainNodeMenu = context.createGain();
    music.menu.buffer = bufferList[0];
    music.menu.loop = true;
    music.gainNodeMenu.gain.setValueAtTime(0.01, context.currentTime);
    music.menu.connect(music.gainNodeMenu);
    music.gainNodeMenu.connect(context.destination);
    music.gainNodeMenu.gain.exponentialRampToValueAtTime(1.0, context.currentTime + 3.0);

    music.game = context.createBufferSource();
    music.gainNodeGame = context.createGain();
    music.game.buffer = bufferList[1];
    music.game.connect(music.gainNodeGame);
    music.gainNodeGame.connect(context.destination);
    music.gainNodeGame.gain.exponentialRampToValueAtTime(1.0, context.currentTime + 3.0);
  }
  
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  init();

  return {
    swapMusic: function(from, to) {
      music['gainNode' + capitalize(from)].gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 3.0);
      music[from].stop(context.currentTime + 3.0);
      createAudio();
      music['gainNode' + capitalize(to)].gain.setValueAtTime(0.07, context.currentTime);
      music[to].start();
    },

    playSound: function(sound) {
      let source = context.createBufferSource();
      source.buffer = bufferList[sounds[sound]];
      source.connect(context.destination);
      var gainNode = context.createGain();
      
      source.connect(gainNode);
      gainNode.connect(context.destination);
      gainNode.gain.value = 0.1;
      source.start();
    }
  }
}());

