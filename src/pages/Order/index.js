import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {EmptyOrder, Header, OrderTabSection} from '../../components';

const Order = () => {
  const [isEmpty] = useState(false);

  if (isEmpty) {
    return <EmptyOrder />;
  }
  return (
    <View style={{flex: 1}}>
      <Header title="Your Orders" subTitle="Wait for the best meal" />
      <View style={{flex: 1, marginTop: 24}}>
        <OrderTabSection />
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
