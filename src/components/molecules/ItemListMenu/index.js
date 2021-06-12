import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcNext} from '../../../assets';
import {colors, fonts} from '../../../utils';
const ItemListMenu = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({});
