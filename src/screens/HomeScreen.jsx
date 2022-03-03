import React from "react";
import { View, Text, Image, Animated, FlatList, Dimensions, ScrollView } from "react-native";
import { COLORS, images, FONTS, SIZES } from "../constants";



const imagesArray = [
  {
    id: 1,
    image: require("../../assets/images/naruto-banner.png"),
  },
  {
    id: 2,
    image: require("../../assets/images/naruto-banner2.png"),
  },
  {
    id: 3,
    image: require("../../assets/images/naruto-banner3.png"),
  },
  {
    id: 4,
    image: require("../../assets/images/naruto-banner4.png"),
  },
];


const HomeScreen= () => {

  const scrollX = React.useRef(new Animated.Value(0)).current;

  function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: "#390575",
          height: 200,
          borderBottomLeftRadius: SIZES.padding2,
          borderBottomRightRadius: SIZES.padding2,
          alignItems: "center",
        }}
      >
        <Image
          source={images.logo}
          style={{
            width: 250,
            height: 150,
            marginTop: SIZES.padding2,
          }}
          resizeMode="contain"
        />
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
          Welcome to Narutopedia!
        </Text>
      </View>
    );
  }

  function renderImageCarousel() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Animated.FlatList
          data={imagesArray}
          horizontal
          pagingEnabled
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <Image
                source={item.image}
                style={{
                  width: Dimensions.get("window").width,
                  height: 250,
                  borderRadius: SIZES.padding2,
                }}
                resizeMode="contain"
              />
            );
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ], { useNativeDriver: false })}

        />
      </View>
    );
  }

  function renderDots() {

    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          marginTop: SIZES.padding,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {imagesArray.map((item, index) => {

          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          })

          const width = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          })

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.gray, COLORS.red, COLORS.gray],
            extrapolate: 'clamp',
          })

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                opacity: opacity,
                borderRadius: SIZES.padding,
                marginHorizontal: 3,
                width: width,
                height: 6,
                backgroundColor: dotColor
              }}
            />

          )
        })}
      </View>
    )
  }

  function renderSynopsis() {
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding2,
          marginTop: SIZES.radius
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Synopsis</Text>
        <Text style={{ color: COLORS.white, ...FONTS.body4, marginTop: SIZES.base }}>
          Twelve years before the start of the series, the Nine-Tails attacked Konohagakure destroying much of the village and taking many lives. The leader of the village, the Fourth Hokage, sacrificed his life to seal the Nine-Tails into a newborn, Naruto Uzumaki. Orphaned by the attack, Naruto was shunned by the villagers, who out of fear and anger, viewed him as the Nine-Tails itself. Though the Third Hokage outlawed speaking about anything related to the Nine-Tails, the children — taking their cues from their parents — inherited the same animosity towards Naruto. In his thirst to be acknowledged, Naruto vowed he would one day become the greatest Hokage the village had ever seen.
        </Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: SIZES.padding }}>
        {renderImageCarousel()}
        {renderDots()}
        {renderSynopsis()}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
