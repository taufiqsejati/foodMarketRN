import {showMessage as showToast} from 'react-native-flash-message';
import {colors} from '../colors';

export const showMessage = (message, type) => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? colors.text.tertiary : colors.error,
  });
};
