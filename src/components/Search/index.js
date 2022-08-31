import { Pressable, Text, View } from "react-native";

// import SearchIcon from "../../../assets/search.svg";
import styles from "./styles";

const Search = () => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn("Search Btn clicked")}
      >
        {/* <SearchIcon width={120} height={40} fill={red} /> */}
        <Text style={styles.searchButtonText}>Busca tu proximo destino</Text>
      </Pressable>
    </View>
  );
};

export default Search;
