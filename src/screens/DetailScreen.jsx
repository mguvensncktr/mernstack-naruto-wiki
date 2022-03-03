import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import TopTabBar from "../Navigation/TopTabs";

import { COLORS, SIZES, FONTS } from "../constants";

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { character } = route.params;

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          marginTop: SIZES.radius + 10,
          marginHorizontal: SIZES.padding2,
        }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={30} color={COLORS.white} />
      </TouchableOpacity>
    );
  }

  function renderImageAndName() {
    return (
      <View style={{ marginTop: SIZES.padding, alignItems: "center" }}>
        <Image
          source={{ uri: character?.image }}
          style={{
            width: "100%",
            height: 250,
          }}
          resizeMode="cover"
        />
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h1,
            marginTop: SIZES.padding2,
          }}
        >
          {character?.name}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      {renderHeader()}
      {renderImageAndName()}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          borderTopLeftRadius: SIZES.radius,
          borderTopRightRadius: SIZES.radius,
        }}
      >
        <TopTabBar character={character} />
      </View>
    </View>
  );
};

export default DetailScreen;
