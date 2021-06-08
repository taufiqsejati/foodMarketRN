import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rating} from '..';
import {colors, fonts} from '../../../utils';

const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Healthy</Text>
        <Rating />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  image: {width: 200, height: 95},
  ratingContainer: {flexDirection: 'row'},
  starContainer: {flexDirection: 'row'},
  text: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  content: {padding: 12},
  container: {
    width: 200,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
});
