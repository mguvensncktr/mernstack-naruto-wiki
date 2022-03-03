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
          source={{ uri: character?.image }}
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
