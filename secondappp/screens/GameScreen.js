import React, { useRef } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = min + Math.floor(Math.random() * (max - min));

  if (random === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return random;
};

export default function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = React.useState(
    generateRandomNumber(1, 100, props.userChoice)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const numberHandler = (choice) => {
    if (
      (choice === 'lower' && currentGuess < props.userChoice) ||
      (choice === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", 'You lying dog!', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }

    if (choice === 'lower') {
      currentHigh.current = currentGuess;
      setCurrentGuess(generateRandomNumber(current));
    } else {
      currentLow.current = currentGuess;
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Computer's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='LOWER' onPress={numberHandler.bind(this, 'lower')} />
        <Button title='GREATER' onPress={numberHandler.bind(this, 'greater')} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
  },
});
