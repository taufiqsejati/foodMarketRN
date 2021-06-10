import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, TextInput, Header} from '../../components';
import {colors} from '../../utils';
import useForm from '../../utils/UseForm';
import Axios from 'axios';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const onSubmit = () => {
    // console.log(['email', form.email, 'password', form.password]);
    console.log('form :', form);
    Axios.post('http://foodmarket-backend.test/api/login', form)
      .then((res) => {
        console.log('success', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button
          text="Sign In"
          // onPress={onSubmit}
          onPress={() => {
            navigation.replace('MainApp');
          }}
        />
        <Gap height={12} />
        <Button
          text="Create New Account"
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

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
