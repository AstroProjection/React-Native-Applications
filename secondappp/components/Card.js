import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'blue',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 10,
    backgroundColor: 'white',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    borderRadius: 10,
    padding: 20,
  },
});
