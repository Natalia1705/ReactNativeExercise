import { View, Text, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CloseIcon from "../../../assets/close.svg";
import searchData from "../../../assets/data/search";
import styles from "./styles";

const SearchResults = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
          alignSelf: "center",
          marginHorizontal: 50,
          marginVertical: 15,
        }}
      >
        <Text style={styles.title}>Elige tu nuevo destino</Text>
        <CloseIcon
          width={25}
          height={25}
          onPress={() => navigation.navigate("Main")}
        />
      </View>
      <FlatList
        data={searchData}
        renderItem={({ item }) => (
          <Pressable
            key={item.id}
            style={styles.destinationBotton}
            onPress={() => console.warn(item.destination)}
          >
            <Text style={styles.destinationText}>{item.destination}</Text>
            <Text style={styles.acronymText}>{item.acronym}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default SearchResults;
