import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {colors, fonts} from '../../utils';
const OrderSummary = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            image={FoodDummy1}
            name="Sop Bumil"
            items={14}
            type="order-summary"
            price="2.000.000"
            item={15}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
          <ItemValue label="Driver" value="IDR 50.000" />
          <ItemValue label="Tax 10%" value="IDR 1.800.390" />
          <ItemValue
            label="Total Price"
            value="IDR 390.803.000"
            valueColor={colors.text.tertiary}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value="Angga Risky" />
          <ItemValue label="Phone No." value="0822 0819 9688" />
          <ItemValue label="Address" value="Setra Duta Palima" />
          <ItemValue label="House No." value="A5 Hook" />
          <ItemValue label="City" value="Bandung" />
        </View>
        <View
          style={{
            paddingHorizontal: 24,
            marginVertical: 24,
          }}>
          <Button
            text="Checkout Now"
            onPress={() => {
              navigation.replace('SuccessOrder');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    marginBottom: 8,
  },
});
