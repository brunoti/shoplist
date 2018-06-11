import { Alert } from 'react-native';

export default ({ onPress, text, title, yesOrNo = false, button = 'Ok', yes, no }) => {
  if(yesOrNo) {
    yes = yes || (() => {});
    no = no || (() => {});

    return Alert.alert(
        title,
        text, [{
          text: 'Sim',
          onPress: yes,
        },{
          text: 'Não',
          onPress: no,
        }], {
          cancelable: false
        }
      );
  }

  onPress = onPress || (() => {});

  return Alert.alert(
      title,
      text, [{
        text: button,
        onPress: onPress,
      }, ], {
        cancelable: false
      }
    );
};
