import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    marginBottom: 20,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: 'transparent',
  },
  pageTitle: {
    marginTop: -10,
    fontSize: 60,
    color: '#9E0061',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    height: 100,
    textShadowColor: '#fff',
    textShadowOffset: {width: 2, height: 5},
    textShadowRadius: 10,
    elevation: 5,
  },

  /* estilos capa do album */

  containerAlbumCover: {
    margin: 10,
    width: '100%',
    height: 300,
    justifyContent: 'center',
  },
  imgCover: {
    width: width,
    height: 280,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    margin: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 13,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  /* estilos detalhes do album */

  containerDetails: {
    justifyContent: 'center',
  },
  nameArtist: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFF',
  },
  nameSong: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
  },
  /* estilo slider */

  containerSlider: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    backgroundColor: '#8A00578C',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#AAA4A49A',
  },

  sliderText: {color: 'white'},

  /* estilos controles */

  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    width: '100%',
    height: 130,
    backgroundColor: '#8A00578C',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#AAA4A49A',
  },
  pauseBtn: {
    width: 100,
    height: 100,
    padding: 10,
    margin: 20,
    backgroundColor: '#33333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,

    borderColor: '#E90756BE',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 13,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  playBtn: {
    width: 100,
    height: 100,
    padding: 10,
    margin: 20,
    backgroundColor: '#33333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#D2D8D1AB',
    elevation: 5,
    shadowColor: '#030202',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 1.84,
  },
  btnControls: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
