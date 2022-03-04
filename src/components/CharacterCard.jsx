import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, FONTS } from "../constants";

const CharacterCard = ({ character }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => navigation.navigate("Details", { character: character })}
    >
      <View
        style={{
          marginTop: SIZES.padding2,
          alignItems: "center",
          backgroundColor: COLORS.primary,
          borderRadius: 50,
        }}
      >
        <Image
          // if character has no image, use default image from web
          source={
            character.image
              ? { uri: character?.image }
              : {
                  uri: "https://vignette.wikia.nocookie.net/naruto/images/b/b4/Naruto_Uzumaki_%28Anime%29.png/revision/latest?cb=20160506024051",
                }
          }
          style={{
            marginTop: 10,
            borderRadius: SIZES.radius,
            width: 150,
            height: 150,
          }}
          resizeMode="cover"
        />
        <Text
          style={{
            color: COLORS.white,
            marginTop: SIZES.padding,
            ...FONTS.h3,
          }}
        >
          {character?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;
