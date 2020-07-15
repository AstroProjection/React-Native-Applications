import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default function GoalItem({ item: { courseGoal, key }, onDelete }) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onDelete(key)}>
      <View style={styles.listItem}>
        <Text>{courseGoal}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#eee',
    margin: 5,
  },
});
