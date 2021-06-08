import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodDummy1, ic_back_white as IcBackWhite} from '../../assets';
import {colors, fonts} from '../../utils';
import {Button, Counter, Rating} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <ImageBackground source={FoodDummy1} style={styles.cover}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.goBack();
            }}>
            <IcBackWhite />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.mainContent}>
            <View style={styles.productContainer}>
              <View>
                <Text style={styles.title}>Cherry Healthy</Text>
                <Rating />
              </View>
              <Counter />
            </View>
            <Text style={styles.desc}>
              Makanan khas Bandung yang cukup sering dipesan oleh anak muda
              dengan pola makan yang cukup tinggi dengan mengutamakan diet yang
              sehat dan teratur.
            </Text>
            <Text style={styles.label}>Ingredients:</Text>
            <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
              <Text style={styles.labelTotal}>Total Price:</Text>
              <Text style={styles.priceTotal}>IDR 12.289.000</Text>
            </View>
            <View style={styles.button}>
              <Button text="Order Now" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  priceContainer: {flex: 1},
  mainContent: {flex: 1},
  page: {flex: 1},
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  button: {width: 163},
  priceTotal: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  labelTotal: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginBottom: 16,
  },
  content: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -20,
    backgroundColor: colors.white,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
});
