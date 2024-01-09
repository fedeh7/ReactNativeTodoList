import { FlatList } from "react-native";
import { Item } from "../../Components/Item";

export const ItemListContainer = ({ itemList, removeItem }) => {
  return (
    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={columnStyle}
      data={itemList}
      renderItem={({ item }) => {
        return <Item item={item} removeItem={removeItem} />;
      }}
    />
  );
};

const columnStyle = {
  justifyContent: "space-evenly",
  alignItems: "center",
};
