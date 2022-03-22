import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  Animated,
  Image,
  Text,
} from 'react-native';

import styles from './stylePlayerCss';
import {TRACKS} from './components/tracks-data';
import AlbumCover from './components/AlbumCover.js';
import AlbumDetails from './components/AlbumDetails.js';
import Controls from './components/Controls.js';
import CompSlider from './components/CompSlider.js';

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

  const [offset] = useState(new Animated.ValueXY({x: 0, y: -200}));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 1,
      /*  bounciness: 10, */
      useNativeDriver: true,
    }).start();
  }, [offset.y]);

  return (
    <>
      <SafeAreaView style={styles.background}>
        <ImageBackground
          style={styles.background}
          blurRadius={2}
          source={require('../../../assets/img/splashLogin.jpg')}>
          <View style={styles.container}>
            <Animated.View
              useNativeDriver="true"
              style={[
                styles.containerTitle,
                {transform: [{translateY: offset.y}]},
              ]}>
              <View style={styles.containerTitle}>
                <Image
                  style={styles.imgTop}
                  source={require('../../../assets/img/iconGDB.png')}
                />
                <Text style={styles.pageTitle}>Player</Text>
              </View>
            </Animated.View>
            {/*capa do player*/}
            <AlbumCover albumCover={currentTrack.albumArtUrl} />
            {/*detalhes da música*/}
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
            <CompSlider />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

export default PlayerScreen;
