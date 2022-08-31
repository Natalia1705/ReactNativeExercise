import { View, Text, FlatList } from "react-native";

import CloseIcon from "../../../assets/close.svg";
import searchData from "../../../assets/data/search";
import styles from "./styles";

const SearchResults = () => {
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
        <CloseIcon width={25} height={25} />
      </View>
      <FlatList
        data={searchData}
        renderItem={({ item }) => (
          <View
            key={item.id}
            style={{
              width: "90%",
              height: 58,
              borderColor: "#E5E5E5",
              borderRadius: 5,
              borderWidth: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "center",
              position: "relative",
              padding: 15,
              marginVertical: 5,

            }}
          >
            <Text style={styles.destinationText}>{item.destination}</Text>
            <Text style={styles.acronymText}>{item.acronym}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchResults;
