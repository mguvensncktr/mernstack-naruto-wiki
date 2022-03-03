import { View, Text, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const JutsuScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: COLORS.white }}
    >
      <View
        style={{ marginHorizontal: SIZES.padding2, marginTop: SIZES.padding }}
      >
        <Text style={{ color: COLORS.black, ...FONTS.h2 }}>Jutsu List</Text>
        {character.jutsu.map((jutsu, index) => (
          <Text key={index} style={{ color: COLORS.black, ...FONTS.body3 }}>
            {jutsu}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default JutsuScreen;
