import React from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components/atoms';
import {fonts} from '../../utils';

const SplashScreen = ({params}) => (
  <View
    style={{
      backgroundColor: '#FFC700',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Logo />
    <Gap height={30} />
    <Text
      style={{fontSize: 32, color: '#020202', fontFamily: fonts.primary[500]}}>
      FoodMarket
    </Text>
  </View>
);

export default SplashScreen;
