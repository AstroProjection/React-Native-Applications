import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colours from '../constants/colours';

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colours.secondary,
    borderWidth: 2,
    marginVertical: 20,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '900',
    color: colours.second,
  },
});
