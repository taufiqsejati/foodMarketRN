import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Rating from '../Rating';

const ItemListFood = ({image}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 8,
        alignItems: 'center',
      }}>
      <Image
        source={image}
        style={{
          width: 60,
          height: 60,
          borderRadius: 8,
          overflow: 'hidden',
          marginRight: 12,
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontFamily: fonts.primary.normal,
            fontSize: 16,
            color: colors.text.primary,
          }}>
          Soup Bumil
        </Text>
        <Text
          style={{
            fontFamily: fonts.primary.normal,
            fontSize: 13,
            color: colors.text.secondary,
          }}>
          IDR 289.000
        </Text>
      </View>
      <Rating />
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({});
