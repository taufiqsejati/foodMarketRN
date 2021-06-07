import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';

const Button = ({text, color = '#FFC700'}) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: color,
    textAlign: 'center',
  },
  container: (color) => ({
    backgroundColor: '#FFC700',
    padding: 12,
    borderRadius: 8,
  }),
});
