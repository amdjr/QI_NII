import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  logoImg: {
    width: '100%',
    height: (578 / 900) * width,
    marginTop: 5,
  },

  scrollContainer: {
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingTop: 10,
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  textContainer: {
    backgroundColor: 'rgba(10,10,10, 0.6)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: '#970A6D',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 20,
  },
});
export default styles;
