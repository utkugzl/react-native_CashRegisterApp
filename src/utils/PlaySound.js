import Sound from 'react-native-sound';

const playSound = () => {
  var whoosh = new Sound('wrong_entry.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // Play the sound with an onEnd callback
    whoosh.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
};

export default playSound;
