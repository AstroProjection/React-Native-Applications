import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import colours from '../constants/colours';
import NumberContainer from '../components/NumberContainer';

export default function StartGameScreen(props) {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const submitHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has to be between 1 and 99.', [
        { text: 'Okay', style: 'cancel', onPress: resetHandler },
      ]);
      return;
    }
    //state changes are batched
    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };
  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.answerDialog}>
        <Text style={{ fontSize: 24 }}>Selected Number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title='START GAME'
          onPress={() => props.startGameHandler(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start game screen</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.gameTitle}>Enter a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={inputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                color={colours.secondary}
                onPress={() => {
                  resetHandler();
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                color={colours.primary}
                onPress={() => submitHandler()}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: '900',
  },
  gameTitle: {
    fontSize: 20,
  },
  button: {
    flex: 1,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  answerDialog: {
    marginVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
});
