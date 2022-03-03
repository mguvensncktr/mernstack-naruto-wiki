import { View, Text, ScrollView } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";

const AboutScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 10 }}
      style={{ flex: 1, backgroundColor: COLORS.white }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          marginHorizontal: SIZES.padding2,
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ color: COLORS.black, ...FONTS.h2 }}>About</Text>
        <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
          {character?.about}
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
