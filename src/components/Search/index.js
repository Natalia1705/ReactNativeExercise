import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchIcon from "../../../assets/search.svg";
import styles from "./styles";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.linkButtonButton}
        onPress={() => navigation.navigate("DestinationSearch")}
      >
        <SearchIcon width={25} height={25} fill={"#EC4C60"} />
        <Text style={styles.linkButtonText}>Busca tu proximo destino</Text>
      </Pressable>
    </View>
  );
};

export default Search;
