import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const Search = () => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn("Search Btn clicked")}
      >
        <Text style={styles.searchButtonText}>Busca tu proximo destino</Text>
      </Pressable>
    </View>
  );
};

export default Search;
