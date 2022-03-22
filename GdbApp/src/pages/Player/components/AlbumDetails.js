import React from 'react';
import {View, Text} from 'react-native';

import styles from '../stylePlayerCss';

export default function AlbumDetails({trackName, artistName}) {
  return (
    <View style={styles.containerDetails}>
      <Text style={styles.name}>{artistName}</Text>
      <Text style={styles.name}>{trackName}</Text>
    </View>
  );
}
