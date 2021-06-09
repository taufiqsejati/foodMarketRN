import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessOrder />
      <Gap height={30} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Text style={styles.subTitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Order Other Foods"
          onPress={() => {
            navigation.replace('MainApp');
          }}
        />
      </View>
      <Gap height={12} />
      <View style={styles.buttonContainer}>
        <Button
          text="View My Order"
          color={colors.Button.secondary.background}
          textColor={colors.Button.secondary.text}
          onPress={() => {
            navigation.replace('MainApp', {screen: 'Order'});
          }}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
});
