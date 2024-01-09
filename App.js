import { View } from "react-native";
import { ItemListContainer } from "./Containers/ItemListContainer";
import { HeaderContainer } from "./Containers/HeaderContainer/HeaderContainer";
import { useState } from "react";
import { centerContents, darkBackground, flexOne } from "./Styles";

export default function App() {
  const [items, setItems] = useState([]);
  const [key, setKey] = useState(0);

  const getNewKey = () => {
    setKey(key + 1);
    return key;
  };
  const addNewItem = (item) => {
    const itemWithKey = { text: item, key: getNewKey() };
    setItems([...items, itemWithKey]);
  };

  const removeItem = (key) => {
    const newItems = items.filter((item) => {
      return item.key != key;
    });
    setItems(newItems);
  };

  return (
    <View style={screenStyles}>
      <HeaderContainer addNewItem={addNewItem} />
      <ItemListContainer itemList={items} removeItem={removeItem} />
    </View>
  );
}

const screenStyles = {
  ...centerContents,
  ...darkBackground,
  ...flexOne,
  paddingTop: 50,
};
