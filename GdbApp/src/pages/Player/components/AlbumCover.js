import React from 'react';
import {View, Image} from 'react-native';

import styles from '../stylePlayerCss';

export default function AlbumCover({albumCover}) {
  return (
    <View style={styles.containerAlbumCover}>
      <Image
        source={{uri: albumCover}}
        resizeMode="stretch"
        style={styles.imgCover}
      />
    </View>
  );
}
