import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import Number from '../Number';

const ItemValue = ({label, value, valueColor = colors.text.primary, type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(valueColor)} />
      ) : (
        <Text style={styles.value(valueColor)}>{value}</Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  value: (valueColor) => ({
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: valueColor,
  }),
});
