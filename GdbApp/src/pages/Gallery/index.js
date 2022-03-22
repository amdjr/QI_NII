import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  StatusBar,
  Image,
} from 'react-native';

import images from './components/data';
import styles from './styleGalleryCss';

const GalleryScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  function animatedScroll() {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {useNativeDriver: true},
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={{flex: 1}} backgroundColor="#000000" />
      <Image
        style={styles.logoImg}
        source={require('../../../assets/img/logo2.png')}
      />
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={animatedScroll()}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View style={{width: windowWidth, height: 380}} key={imageIndex}>
                <ImageBackground source={{uri: image}} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {'foto - ' + imageIndex}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, {width}]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GalleryScreen;
