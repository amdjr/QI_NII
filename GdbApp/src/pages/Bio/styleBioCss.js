import {StyleSheet, Dimensions} from 'react-native';

/* const width = Dimensions.get('screen').width; */
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredViewTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    width: 450,
    height: 300,
  },

  textTop: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },

  textBio: {color: 'white', textAlign: 'center', fontSize: 15},

  centeredViewBio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 330,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
  },

  centeredViewModal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  modalView: {
    margin: 20,
    marginTop: 120,
    backgroundColor: '#9E0D69',
    borderWidth: 5,
    borderColor: '#A789A49F',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  modalImage: {
    width: 350,
    height: 350,
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 5,
    borderColor: '#77777777',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 13,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonOpen: {
    backgroundColor: '#9E0D69',
  },
  buttonClose: {
    backgroundColor: '#0808086B',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
  },
});

export default styles;
