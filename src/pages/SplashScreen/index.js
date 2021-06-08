import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components/atoms';
import {colors, fonts} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AuthApp');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <Gap height={30} />
      <Text style={styles.title}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: colors.text.primary,
    fontFamily: fonts.primary[500],
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
