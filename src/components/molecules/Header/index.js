import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ic_back as IcBack} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  back: {
    padding: 16,
    marginRight: 16,
    marginTop: -10,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
});
