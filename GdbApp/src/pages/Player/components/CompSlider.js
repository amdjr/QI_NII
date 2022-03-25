import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import Slider from '@react-native-community/slider';

import styles from '../stylePlayerCss';

export default function CompSlider() {
  const [sliderValue, setSliderValue] = useState(15);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerSlider}>
        {/*Texto do slider*/}
        <Text style={styles.sliderText}>Volume : {sliderValue}</Text>

        {/*Valores do Slider : max, min e initial value*/}
        <Slider
          style={{width: '100%'}}
          maximumValue={100}
          thumbTintColor="#E6E6E69A"
          minimumValue={0}
          minimumTrackTintColor="#9E0061"
          maximumTrackTintColor="white"
          step={1}
          value={sliderValue}
          onValueChange={sliderValue => setSliderValue(sliderValue)}
        />
      </View>
    </SafeAreaView>
  );
}
