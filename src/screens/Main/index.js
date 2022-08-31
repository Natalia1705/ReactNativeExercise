import "react-native-gesture-handler";
import { ScrollView, Text, View } from "react-native";

import InfoCard from "../../components/InfoCard";
import Search from "../../components/Search";
import Links from "../../components/Links";
import Carousel from "../../components/Carousel";
import MaletasIcon from "../../../assets/maletas.svg";
import GroupIcon from "../../../assets/group.svg";
import Arrow from "../../../assets/arrow.svg";
import styles from "./styles";

const Main = (props) => {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Search />
        <Carousel />
        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            height: 20,
          }}
        >
          <Text style={styles.infoText}>Información para tu viaje</Text>
        </View>
        <InfoCard />
        <Links icon={<MaletasIcon />} text={"Reglas de Equipaje "} />
        <Links icon={<GroupIcon />} text={"Cambiar/cancelar mi vuelo"} />
        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            height: 50,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "95%",
              marginHorizontal: 5,
              marginVertical: 5,
              height: 20,
            }}
          >
            <Text
              style={styles.allInfoText}
              onPress={() => console.warn("Ver toda la información")}
            >
              Ver toda la información
            </Text>
            <Arrow />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
