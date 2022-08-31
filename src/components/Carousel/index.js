import { Text, View, FlatList } from "react-native";

import feed from "../../../assets/data/feed";
import Card from "../Card";
import styles from "./styles";

const Carousel = () => {
  return (
    <View
      style={{
        width: 320,
      }}
    >
      <FlatList
        horizontal={true}
        data={feed}
        renderItem={({ item }) => <Card card={item} key={feed.id} />}
      />
    </View>
  );
};

export default Carousel;
