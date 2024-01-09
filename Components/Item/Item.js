import { Text, TouchableOpacity, View } from "react-native";
import { centerText, clearerFont } from "../../Styles";

export const Item = ({ item, removeItem }) => {
  return (
    <TouchableOpacity
      style={itemStyles}
      onPress={() => {
        removeItem(item.key);
      }}
    >
      <Text style={itemTextStyles}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const itemStyles = {
  paddingVertical: 10,
  paddingHorizontal: 15,
  margin: 20,
  backgroundColor: "gray",
};

const itemTextStyles = {
  ...centerText,
  ...clearerFont,
  width: 100,
};
