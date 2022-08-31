import { Text, View, Image, Pressable, } from "react-native";
import styles from "./styles";

const Card = (props) => {
  const card = props.card;
  return (
    <View
      style={{
        width: 335,
        height: 320,
        marginTop: 15,
        marginBottom: 20,
      }}
    >
      <Image
        source={{
          uri: card.image,
        }}
        style={{
          width: 335,
          aspectRatio: 7 / 3,
          resizeMode: "cover",
          borderTopLeftRadius: 11,
          borderTopRightRadius: 11,
        }}
      />
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
        <Text style={styles.cardTitle}>{card.title}</Text>
        <Text style={styles.cardDescription}>{card.description}</Text>
        <Pressable
          style={styles.cardButton}
          onPress={() => console.warn("Reservar")}
        >
          <Text style={styles.cardButtonText}>RESERVAR</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Card;
