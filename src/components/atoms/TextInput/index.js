import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import {fonts} from '../../../utils';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: '#020202',
  },
});
