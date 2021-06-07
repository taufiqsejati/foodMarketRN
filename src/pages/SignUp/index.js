import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, TextInput, Header, Button} from '../../components';
import {colors, fonts} from '../../utils';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Sign Up"
        subTitle="Register and eat"
        onBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          text="Continue"
          color={colors.Button.secondary.background}
          textColor={colors.Button.secondary.text}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
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
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.secondary,
    width: 110,
    height: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {flex: 1},
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
