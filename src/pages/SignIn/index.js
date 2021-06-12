import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {signInAction} from '../../redux/action/auth';
import {setLoading} from '../../redux/action/global';
import {colors} from '../../utils';
import useForm from '../../utils/UseForm';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: 'r@yolo.id',
    password: 'Jakarta48Nabilah',
  });
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(setLoading(true));
    dispatch(signInAction(form, navigation));
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
          onPress={() => {
            // navigation.replace('MainApp');
            onSubmit();
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
