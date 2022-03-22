import React, {useState} from 'react';
import {View, ImageBackground, SafeAreaView} from 'react-native';

import styles from './stylePlayerCss';
import {TRACKS} from './components/tracks-data';
import AlbumCover from './components/AlbumCover.js';
import AlbumDetails from './components/AlbumDetails.js';
import Controls from './components/Controls.js';

function PlayerScreen({navigation}) {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const currentTrack = TRACKS[selectedTrack];

  const [pause, setPause] = useState(false);

  console.log({currentTrack});

  function btnPlayPause() {
    setPause(!pause);
  }

  function playNextTrack() {
    if (selectedTrack === TRACKS.length - 1) {
      setSelectedTrack(0);
    } else {
      setSelectedTrack(selectedTrack + 1);
    }
  }

  function playPrevTrack() {
    if (selectedTrack === 0) {
      setSelectedTrack(TRACKS.length - 1);
    } else {
      setSelectedTrack(selectedTrack - 1);
    }
  }

  return (
    <>
      <SafeAreaView style={styles.background}>
        <ImageBackground
          style={styles.background}
          blurRadius={2}
          source={require('../../../assets/img/splashLogin.jpg')}>
          <View style={styles.container}>
            {}
            <AlbumCover albumCover={currentTrack.albumArtUrl} />
            {}
            <AlbumDetails
              trackName={currentTrack.title}
              artistName={currentTrack.artist}
            />
            <Controls
              {...{btnPlayPause}}
              {...{pause}}
              {...{playNextTrack}}
              {...{playPrevTrack}}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

export default PlayerScreen;
