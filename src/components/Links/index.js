import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";

const Card = (text) => {
  return (
    <View
      style={{
        width: 335,
        height: 165,
        borderColor: "#E5E5E5",
        borderBottomLeftRadius: 11,
        borderBottomRightRadius: 11,
        borderWidth: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Text style={styles.cardTitle}>{text}</Text>
      <Pressable
        style={styles.cardButton}
        onPress={() => console.warn("Ver")}
      >
        <Text style={styles.cardButtonText}>VER</Text>
      </Pressable>
    </View>
  );
};

export default Card;
