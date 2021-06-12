import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = () => {
  const [photo, setPhoto] = useState(ProfileDummy);
  useEffect(() => {
    getData('userProfile').then((res) => {
      console.log('user profile : ', res);
      setPhoto({uri: res.profile_photo_url});
    });
  }, []);
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.desc}>Let’s get some foods</Text>
      </View>
      <View>
        <Image style={styles.profile} source={photo} />
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: colors.white,
  },
  appName: {
    fontSize: 22,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
  profile: {height: 50, width: 50, borderRadius: 8},
});
