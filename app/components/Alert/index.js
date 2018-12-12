import Alert from './Alert';
import anywhere from './Alert.anywhere';

Alert.success = anywhere('success');
Alert.info = anywhere('info');
Alert.warning = anywhere('warning');
Alert.error = anywhere('error');

export default Alert;
