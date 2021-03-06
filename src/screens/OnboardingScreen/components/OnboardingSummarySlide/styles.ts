import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  header: {
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  centerContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomContentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  description: {
    textAlign: 'right',
    marginTop: 20,
  },
  slideImageContainer: {
    width: '100%',
    maxHeight: '50%',
    flex: 1,
  },
  slideImage: {
    width: screenWidth - 120,
    flex: 1,
    alignSelf: 'center',
  },
  margin40: {
    marginTop: 40,
  },
  button: {
    marginTop: 20,
  },
});

export default styles;
