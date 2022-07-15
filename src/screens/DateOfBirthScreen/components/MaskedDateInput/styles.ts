import {StyleSheet} from 'react-native';
import colors from '~/theme/colors';

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 2,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginBottom: 3,
    borderColor: colors.blue[200],
  },
  valid: {
    borderColor: colors.green[400],
  },
  invalid: {
    borderColor: colors.red[400],
  },
  input: {
    width: '90%',
    paddingVertical: 0,
    paddingLeft: 0,
    fontSize: 18,
    color: colors.gray[800],
  },
  errorMessage: {
    color: colors.red[400],
  },
  errorMessageContainer: {
    height: 20,
  },
  label: {
    color: colors.gray[800],
    opacity: 0.8,
    fontSize: 14,
  },
});

export default styles;
