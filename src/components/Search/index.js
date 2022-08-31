import { Pressable, Text, View } from "react-native";

import SearchIcon from "../../../assets/search.svg";
import styles from "./styles";

const Search = () => {
  return (
    <View>
      <Pressable
        style={styles.linkButtonButton}
        onPress={() => console.warn("Search Btn clicked")}
      >
         <SearchIcon width={25} height={25} fill={"red"} /> 
        <Text style={styles.linkButtonText}>Busca tu proximo destino</Text>
      </Pressable>
    </View>
  );
};

export default Search;
