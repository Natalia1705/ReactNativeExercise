import { Text, View } from "react-native";
import Card from "./src/components/Card";
import Search from "./src/components/Search";
import feed from "./assets/data/feed";
import SearchResults from "./src/components/SearchResults";

import styles from "./styles";

const card1 = feed[0];
const Card = (props) => {
  const card = props.card;
  return (
    <View>
      <Search />
      <Card card={card1} />
      <SearchResults />
    </View>
  );
};

export default Card;
