import { View } from "react-native";
import { centerContents } from "../../Styles";
import { AddItemComponent } from "../../Components/AddItemComponent";

export const HeaderContainer = ({ addNewItem }) => {
  return (
    <View style={headerStyles}>
      <AddItemComponent addNewItem={addNewItem} />
    </View>
  );
};

const headerStyles = {
  ...centerContents,
  width: "100%",
  borderBottomColor: "gray",
  borderBottomWidth: 1,
  padding: 10,
};
