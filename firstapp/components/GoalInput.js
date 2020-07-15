import React from 'react';
import { StyleSheet, TextInput, Button, View, Modal } from 'react-native';

export default function GoalInput({ addGoal, showModal, closeModal }) {
  const [courseGoal, setCourseGoal] = React.useState('');
  return (
    <Modal visible={showModal} animationType='slide' style={styles.addModal}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course goal'
          placeholderTextColor='grey'
          style={styles.inputBox}
          onChangeText={setCourseGoal}
          value={courseGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Clear'
              style={styles.clearButton}
              onPress={() => {
                setCourseGoal('');
              }}
              color='red'
            />
          </View>
          <View style={styles.button}>
            <Button
              title='ADD'
              style={styles.addButton}
              onPress={() => {
                addGoal(courseGoal);
                setCourseGoal('');
                closeModal();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  inputBox: {
    width: '70%',
    borderColor: '#a88888',
    borderWidth: 2,
    textAlign: 'center',
    marginBottom: 10,
  },
  addModal: {
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    marginHorizontal: 5,
  },
});
