import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import { SvgUri } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const ClanListItem = ({ clan }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => navigation.navigate("ClanDetails", { clan })}
    >
      <View
        style={{
          marginTop: SIZES.padding2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
          borderRadius: 50,
          flex: 1,
        }}
      >
        {clan?.clanImage == "No image found" ? (
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png",
            }}
            style={{
              width: 150,
              height: 150,
              borderRadius: SIZES.radius,
            }}
            resizeMode="cover"
          />
        ) : clan?.clanImage.includes("Symbol") ? (
          <SvgUri width={100} height={100} uri={clan?.clanImage} />
        ) : (
          <Image
            source={{ uri: clan?.clanImage }}
            style={{
              marginTop: 10,
              borderRadius: SIZES.radius,
              width: 150,
              height: 150,
            }}
            resizeMode="cover"
          />
        )}
        <Text
          style={{
            color: COLORS.primary,
            marginTop: SIZES.padding,
            ...FONTS.h3,
          }}
        >
          {clan?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClanListItem;
