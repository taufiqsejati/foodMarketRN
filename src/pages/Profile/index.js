import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {ProfileTabSection} from '../../components';
import {API_HOST} from '../../config';
import {colors, fonts, getData, showMessage, storeData} from '../../utils';

const Profile = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    navigation.addListener('focus', () => {
      updateUserProfile();
    });
  }, [navigation]);

  const updateUserProfile = () => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
    });
  };

  const updatePhoto = () => {
    ImagePicker.launchImageLibrary(
      {
        quality: 0.7,
        maxWidth: 200,
        maxHeight: 200,
      },
      (response) => {
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };

          const photoForUpload = new FormData();
          photoForUpload.append('file', dataImage);
          getData('token').then((resToken) => {
            Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
              headers: {
                Authorization: resToken.value,
                'Content-Type': 'multipart/form-data',
              },
            })
              .then((res) => {
                getData('userProfile').then((resUser) => {
                  showMessage('Update Photo Berhasil', 'success');
                  resUser.profile_photo_url = `${API_HOST.storage}/${res.data.data[0]}`;
                  storeData('userProfile', resUser).then(() => {
                    updateUserProfile();
                  });
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'MainApp'}],
                  });
                });
              })
              .catch((err) => {
                showMessage(
                  `${err?.response?.data?.message} on Update Photo API` ||
                    'Terjadi kesalahan di API Update Photo',
                );
              });
          });
        }
      },
    );
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: colors.white, paddingBottom: 26}}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={updatePhoto}>
              <View style={styles.borderPhoto}>
                <Image
                  source={{uri: userProfile.profile_photo_url}}
                  style={styles.photoContainer}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: fonts.primary[500],
              color: colors.text.primary,
              textAlign: 'center',
            }}>
            {userProfile.name}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: fonts.primary[300],
              color: colors.text.secondary,
              textAlign: 'center',
            }}>
            {userProfile.email}
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
