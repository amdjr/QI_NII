import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
  },
  container2: {
    flex: 2,
  },
  containerLogo: {
    flex: 3,
  },
  containerFoto: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBtn: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: '#000000',
  },

  logoImg: {width: '100%', height: (578 / 900) * width, marginTop: 20},

  logoFoto: {
    width: '100%',
    height: (558 / 900) * width,
  },

  btnLink: {
    fontSize: 15,
    color: '#FFF',
    backgroundColor: '#9E0D69',
    borderRadius: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    elevation: 10,
    margin: 7,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'rgba(50, 50, 50,0.5)',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular.ttf',
    width: 100,
    height: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#77777777',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 13,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default styles;
