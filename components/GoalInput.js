import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button color="#D933FF" title="Add goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#E8ACB7",
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
