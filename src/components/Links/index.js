import { Text, View, useWindowDimensions, Pressable } from "react-native";
import styles from "./styles";

const Links = ({ text, icon }) => {
  const width = useWindowDimensions().width;
  return (
    <View
      style={{
        width: width - 35,
        height: 50,
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
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        {icon}
      </View>
      <Text style={styles.linkTitle}>{text}</Text>
      <Pressable style={styles.linkButton} onPress={() => console.warn("Ver")}>
        <Text style={styles.linkButtonText}>VER</Text>
      </Pressable>
    </View>
  );
};

export default Links;
