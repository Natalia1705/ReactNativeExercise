import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";

const InfoCard = () => {
  return (
    <View
      style={{
        width: 335,
        height: 270,
        marginTop:15,
      }}
    >
      <Image
        source={{
          uri: "https://scontent.fmex10-1.fna.fbcdn.net/v/t1.6435-9/65496925_10157481877348104_7317859020881002496_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2c4854&_nc_ohc=LyKwCA_yJb8AX-C22CK&_nc_ht=scontent.fmex10-1.fna&oh=00_AT9kU-n-0HdJY6VeP1xEXQtGYwSFbzTxpo1CUxGlTR0qvg&oe=63324F7C",
        }}
        style={{
          width: 335,
          aspectRatio: 8 / 3,
          resizeMode: "cover",
          borderTopLeftRadius: 11,
          borderTopRightRadius: 11,
        }}
      />
      <View
        style={{
          width: 335,
          height: 132,
          borderColor: "#E5E5E5",
          borderBottomLeftRadius: 11,
          borderBottomRightRadius: 11,
          borderWidth: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text style={styles.cardTitle}>Requisitos de viaje por país</Text>
        <Text style={styles.cardDescription}>
          Utiliza nuestra nueva herramienta para consultar los destinos a los
          que puedes viajar y obtener detalles sobre los requisitos de entrada.
          Conoce más
        </Text>
      </View>
    </View>
  );
};

export default InfoCard;
