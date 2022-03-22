import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  ImageBackground,
  Text,
  Animated,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';

import styles from './styleBioCss';

function BioScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const [offset] = useState(new Animated.ValueXY({x: 0, y: -300}));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 0.5,
      bounciness: 15,
      useNativeDriver: true,
    }).start();
  }, [offset.y]);

  return (
    <SafeAreaView style={styles.centeredView}>
      <View style={styles.centeredViewTop}>
        <ImageBackground
          resizeMode="contain"
          style={styles.centeredViewBio}
          source={require('../../../assets/img/logo2.png')}>
          <Animated.View
            useNativeDriver="true"
            style={[
              styles.containerLogo,
              {transform: [{translateY: offset.y}]},
            ]}>
            <Text style={styles.textTop}>Amizade duradoura</Text>
            <Text style={styles.textBio}>
              O grupo que conquistou o público no programa SuperStar da rede
              Globo agora com um novo trabalho.
            </Text>
          </Animated.View>
        </ImageBackground>
      </View>
      <View style={styles.centeredView}>
        <ImageBackground
          style={styles.centeredViewModal}
          source={require('../../../assets/img/foto4.png')}>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>O começo de um sonho!</Text>
                  <Image
                    resizeMode="stretch"
                    style={styles.modalImage}
                    source={require('../../../assets/img/Grupo-do-Bola4.jpg')}
                  />
                  <TouchableHighlight
                    activeOpacity={0.7}
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>fechar</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <TouchableHighlight
              activeOpacity={0.7}
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Primeira formação</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible1}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible1);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Deu tudo certo!</Text>
                  <Image
                    resizeMode="cover"
                    style={styles.modalImage}
                    source={require('../../../assets/img/foto3.jpeg')}
                  />
                  <TouchableHighlight
                    activeOpacity={0.7}
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible1(!modalVisible1)}>
                    <Text style={styles.textStyle}>fechar</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <TouchableHighlight
              activeOpacity={0.7}
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible1(true)}>
              <Text style={styles.textStyle}>Formação atual</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default BioScreen;
