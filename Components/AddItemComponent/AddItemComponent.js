import { Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { centerContents, centerText, clearerFont } from "../../Styles";

export const AddItemComponent = ({ addNewItem }) => {
  const [text, setText] = useState("");

  const saveText = (newText) => {
    setText(newText);
  };

  const addItem = () => {
    addNewItem(text);
    setText("");
  };

  return (
    <View style={containerStyles}>
      <TextInput
        style={inputStyles}
        placeholder="Escribe algo para agregar"
        onChangeText={saveText}
        value={text}
        onSubmitEditing={addItem}
      />
      <Pressable style={buttonStyles} onPress={addItem}>
        <Text style={buttonText}>Agregar</Text>
      </Pressable>
    </View>
  );
};

const samePadding = {
  paddingVertical: 10,
  paddingHorizontal: 15,
};

const containerStyles = {
  ...centerContents,
  flexDirection: "row",
  gap: 15,
};

const inputStyles = {
  ...centerText,
  ...clearerFont,
  ...samePadding,
  backgroundColor: "white",
};

const buttonStyles = {
  ...samePadding,
  ...centerContents,
  backgroundColor: "pink",
};

const buttonText = {
  ...clearerFont,
};
