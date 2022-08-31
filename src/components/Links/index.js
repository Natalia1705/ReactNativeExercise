import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";

const Links = ({ text, icon }) => {
  return (
    <View
      style={{
        width: 335,
        height: 61,
        borderColor: "#E5E5E5",
        borderRadius: 11,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        marginVertical: 5,
      }}
    >
      <View style={{
        marginHorizontal: 10,
      }}>{icon}</View>
      <Text style={styles.linkTitle}>{text}</Text>
      <Pressable style={styles.linkButton} onPress={() => console.warn("Ver")}>
        <Text style={styles.linkButtonText}>VER</Text>
      </Pressable>
    </View>
  );
};

export default Links;
