import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from '../stylePlayerCss';

export default function Controls({
  btnPlayPause,
  pause,
  playNextTrack,
  playPrevTrack,
}) {
  return (
    <View style={styles.controlsContainer}>
      <TouchableOpacity onPress={playPrevTrack}>
        <AntDesign name="banckward" size={30} color="white" />
      </TouchableOpacity>

      {pause ? (
        <TouchableOpacity style={styles.playPauseBtn} onPress={btnPlayPause}>
          <AntDesign name="pausecircleo" size={45} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.playPauseBtn} onPress={btnPlayPause}>
          <AntDesign name="playcircleo" size={45} color="white" />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={playNextTrack}>
        <AntDesign name="forward" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}
