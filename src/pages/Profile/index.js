import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import {colors, fonts} from '../../utils';
import {ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: colors.white, paddingBottom: 26}}>
          <View style={styles.photo}>
            <View style={styles.borderPhoto}>
              <Image source={ProfileDummy} style={styles.photoContainer} />
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: fonts.primary[500],
              color: colors.text.primary,
              textAlign: 'center',
            }}>
            Angga Risky
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: fonts.primary[300],
              color: colors.text.secondary,
              textAlign: 'center',
            }}>
            wepanda@gmail.com
          </Text>
        </View>
        <View style={{flex: 1, marginTop: 24}}>
          <ProfileTabSection />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.secondary,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: colors.secondary,
    padding: 24,
  },
});
