import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcNext} from '../../../assets';
import {colors, fonts} from '../../../utils';
const ItemListMenu = ({text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: fonts.primary.normal,
          color: colors.text.primary,
        }}>
        {text}
      </Text>
      <IcNext />
    </View>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({});
