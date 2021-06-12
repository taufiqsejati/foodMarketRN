import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBtnMin, IcBtnAdd} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onCount = (type) => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <IcBtnMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
        <IcBtnAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  value: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    marginHorizontal: 10,
  },
});
