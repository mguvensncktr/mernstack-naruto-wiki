import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES, FONTS } from "../constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";

const ClanDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { clan } = route.params;

  const [showModal, setShowModal] = React.useState(false);

  const isSvg = clan?.clanImage.includes("Symbol");
  const noImage = clan?.clanImage == "No image found";
  const svgTextColor = isSvg ? COLORS.primary : COLORS.white;

  function renderHeader() {
    return (
      <View
        style={{
          marginTop: SIZES.radius + SIZES.padding,
          marginHorizontal: SIZES.padding2,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color={isSvg ? COLORS.primary : COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

  function renderImageAndName() {
    return (
      <View style={{ marginTop: SIZES.padding, alignItems: "center" }}>
        {noImage ? (
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h1,
              marginTop: SIZES.padding2,
            }}
          >
            {clan?.name}
          </Text>
        ) : clan?.clanImage.includes("Symbol") ? (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <SvgUri width={250} height={200} uri={clan?.clanImage} />
            <Text
              style={{
                color: svgTextColor,
                ...FONTS.h1,
                marginTop: SIZES.padding2,
                flex: 1,
              }}
            >
              {clan?.name}
            </Text>
          </View>
        ) : (
          <>
            <Image
              source={{ uri: clan?.clanImage }}
              style={{
                marginTop: 10,
                borderRadius: SIZES.radius,
                width: "100%",
                height: 250,
              }}
              resizeMode="cover"
            />
            <Text
              style={{
                color: svgTextColor,
                ...FONTS.h1,
                marginTop: SIZES.padding2,
              }}
            >
              {clan?.name}
            </Text>
          </>
        )}
      </View>
    );
  }

  function renderInfo() {
    return (
      <View
        style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding2 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{ color: svgTextColor, ...FONTS.body2, fontWeight: "bold" }}
          >
            Affiliation
          </Text>
          <Text style={{ color: svgTextColor, ...FONTS.body3 }}>
            {clan?.affiliation}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{ color: svgTextColor, ...FONTS.body2, fontWeight: "bold" }}
          >
            Clan Members
          </Text>
          <Text
            style={{ color: svgTextColor, ...FONTS.body3 }}
            onPress={() => setShowModal(!showModal)}
          >
            Show All
          </Text>
        </View>
        {clan?.clanJutsuList.length > 0 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: svgTextColor,
                ...FONTS.body3,
                fontWeight: "bold",
              }}
            >
              Jutsu
            </Text>
            <View style={{ flex: 1 }}>
              {clan?.clanJutsuList.map((jutsu, index) => {
                return (
                  <Text
                    key={index}
                    style={{
                      color: svgTextColor,
                      ...FONTS.body3,
                      marginTop: 5,
                      textAlign: "right",
                    }}
                  >
                    {jutsu}
                  </Text>
                );
              })}
            </View>
          </View>
        )}
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: isSvg ? COLORS.white : COLORS.primary,
      }}
      showsVerticalScrollIndicator={false}
    >
      {renderHeader()}
      {renderImageAndName()}
      {renderInfo()}
      {showModal && (
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <ScrollView
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingTop: SIZES.radius + SIZES.padding2,
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setShowModal(!showModal)}
              style={{
                position: "absolute",
                top: 25,
                right: 20,
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.body2 }}>Close</Text>
            </TouchableOpacity>
            {clan?.clanMembers.map((member, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.white,
                    ...FONTS.h3,
                    paddingVertical: SIZES.base,
                  }}
                >
                  {member}
                </Text>
              );
            })}
          </ScrollView>
        </Modal>
      )}
    </ScrollView>
  );
};

export default ClanDetailScreen;
