import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={selectedLanguage}
        // onValueChange={(itemValue, itemIndex) =>
        //   setSelectedLanguage(itemValue)
        // }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.text.primary,
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
});
