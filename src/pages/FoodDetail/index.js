import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodDummy1, ic_back_white as IcBackWhite} from '../../assets';
import {colors, fonts, getData} from '../../utils';
import {Button, Counter, Number, Rating} from '../../components';

const FoodDetail = ({navigation, route}) => {
  const {id, name, picturePath, description, ingredients, rate, price} =
    route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
    });
  }, []);

  const onCounterChange = (value) => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;

    const data = {
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        total,
      },
      userProfile,
    };

    navigation.navigate('OrderSummary', data);
  };
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground source={{uri: picturePath}} style={styles.cover}>
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
                <Text style={styles.title}>{name}</Text>
                <Rating number={rate} />
              </View>
              <Counter onValueChange={onCounterChange} />
            </View>
            <Text style={styles.desc}>{description}</Text>
            <Text style={styles.label}>Ingredients:</Text>
            <Text style={styles.desc}>{ingredients}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
              <Text style={styles.labelTotal}>Total Price:</Text>
              <Number number={totalItem * price} style={styles.priceTotal} />
            </View>
            <View style={styles.button}>
              <Button text="Order Now" onPress={onOrder} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
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
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  priceContainer: {flex: 1},
  button: {width: 163},
  labelTotal: {
    fontSize: 13,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  priceTotal: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
});
