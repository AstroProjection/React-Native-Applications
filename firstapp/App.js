import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseList, setCourseList] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  const addGoal = (courseGoal) => {
    if (courseGoal.length > 0) {
      setCourseList((currentCourseList) => [
        ...currentCourseList,
        { key: Math.random().toString(), courseGoal },
      ]);
    }
  };

  const removeGoal = (goalId) => {
    setCourseList((currentCourseList) =>
      currentCourseList.filter((course) => course.key !== goalId)
    );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add a goal' onPress={() => setShowModal(true)} />
      <GoalInput
        addGoal={addGoal}
        closeModal={closeModal}
        showModal={showModal}
      />
      <FlatList
        data={courseList}
        style={styles.courseList}
        renderItem={({ item }) => (
          <GoalItem onDelete={removeGoal} item={item} />
        )}
        keyExtractor={(item) => item.key}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: '#bbb',
  },

  courseList: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#eee',
  },
});
