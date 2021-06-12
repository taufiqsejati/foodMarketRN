import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {setLoading, signUpAction} from '../../redux/action';
import {colors, fonts} from '../../utils';
import useForm from '../../utils/UseForm';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '0895387275199',
    address: 'Bekasi',
    houseNumber: '289',
    city: 'Bekasi',
  });
  const {registerReducer, photoReducer} = useSelector((state) => state);
  const dispatch = useDispatch();

  onSubmit = () => {
    console.log('data form :', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
  };
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header
          title="Address"
          subTitle="Make sure it’s valid"
          onBack={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={(value) => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={(value) => setForm('city', value)}
          />
          <Gap height={24} />
          <Button
            text="Sign Up Now"
            onPress={() => {
              // navigation.replace('SuccessSignUp');
              onSubmit();
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpAddress;

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
    borderRadius: 110,
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
