import React from 'react';
import {View, Text} from 'react-native';

import styles from '../stylePlayerCss';

export default function AlbumDetails({trackName, artistName}) {
  return (
    <View style={styles.containerDetails}>
      <Text style={styles.nameArtist}>{artistName}</Text>
      <Text style={styles.nameSong}>{trackName}</Text>
    </View>
  );
}
