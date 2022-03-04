import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "../constants";
import { SvgUri } from "react-native-svg";

const DojutsuItemCard = ({ dojutsu }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() =>
        navigation.navigate("DojutsuDetails", { dojutsu: dojutsu })
      }
    >
      <View
        style={{
          marginTop: SIZES.padding2,
          alignItems: "center",
          backgroundColor: COLORS.primary,
          borderRadius: 50,
        }}
      >
        <SvgUri width={320} height={325} uri={dojutsu?.image} />
        <Text
          style={{
            color: COLORS.white,
            marginTop: SIZES.padding,
            ...FONTS.h3,
          }}
        >
          {dojutsu?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DojutsuItemCard;
