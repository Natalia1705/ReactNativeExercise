import { useRef } from "react";
import { View, FlatList, useWindowDimensions, Animated } from "react-native";

import Card from "../Card";
import feed from "../../../assets/data/feed";
import styles from "./styles";

const Carousel = () => {
  const width = useWindowDimensions().width;
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View
      style={{

        width,
        marginHorizontal: 15,
      }}
    >
      <Animated.FlatList
        horizontal={true}
        data={feed}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 10 }
        decelerationRate="fast"
        snapToAligment={"center"}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => <Card card={item} key={feed.id} />}
      />
      <View
        style={{
          width: width / 6,
          flexDirection: "row",
          justifyContent: "space-around",
          height: 20,
          position: "relative",
          alignSelf: "center",
          marginBottom: 15,
        }}
      >
        {feed?.map((_, index) => (
          <View key={index} style={styles.dot} />
        ))}
        <Animated.View
          style={[
            styles.dotSelected,
            {
              transform: [
                {
                  translateX: Animated.divide(scrollX, width).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 21],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Carousel;
