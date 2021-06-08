import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBtnAdd, IcBtnMin} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcBtnMin />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity>
        <IcBtnAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.black,
    marginHorizontal: 10,
  },
});
