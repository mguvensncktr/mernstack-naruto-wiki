import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "../constants";
import { AntDesign } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";

const DojutsuDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { dojutsu } = route.params;

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
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

  function renderImageAndName() {
    return (
      <View
        style={{
          marginTop: SIZES.padding2,
          marginHorizontal: SIZES.padding2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SvgUri width={320} height={325} uri={dojutsu?.image} />
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
          {dojutsu?.name}
        </Text>
      </View>
    );
  }

  function renderInfoSection() {
    return (
      <View
        style={{ marginTop: SIZES.padding2, marginHorizontal: SIZES.padding2 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body2,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            About
          </Text>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body3,
              flex: 1,
              textAlign: "right",
            }}
          >
            {dojutsu?.about}
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
            style={{
              color: COLORS.white,
              ...FONTS.body2,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Literal Meaning
          </Text>
          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
            {dojutsu?.literalMeaning}
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
            style={{ color: COLORS.white, ...FONTS.body2, fontWeight: "bold" }}
          >
            Viz Manga
          </Text>
          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
            {dojutsu?.vizManga}
          </Text>
        </View>
        {dojutsu?.clan.length > 0 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body2,
                fontWeight: "bold",
              }}
            >
              Clan
            </Text>
            <View>
              {dojutsu?.clan.map((cln, index) => {
                return (
                  <Text
                    key={index}
                    style={{
                      color: COLORS.white,
                      ...FONTS.body3,
                      marginTop: 5,
                      textAlign: "right",
                    }}
                  >
                    {cln}
                  </Text>
                );
              })}
            </View>
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body2,
              fontWeight: "bold",
            }}
          >
            Classification
          </Text>
          <View>
            {dojutsu?.classification.map((clss, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.white,
                    ...FONTS.body3,
                    marginTop: 5,
                    textAlign: "right",
                  }}
                >
                  {clss}
                </Text>
              );
            })}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body2,
              fontWeight: "bold",
            }}
          >
            Known Wielders
          </Text>
          <View style={{ flex: 1 }}>
            {dojutsu?.knownWielders.map((kw, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.white,
                    ...FONTS.body3,
                    marginTop: 5,
                    textAlign: "right",
                  }}
                >
                  {kw}
                </Text>
              );
            })}
          </View>
        </View>
        {dojutsu?.jutsu.length > 0 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body2,
                fontWeight: "bold",
              }}
            >
              Jutsu's
            </Text>
            <View style={{ flex: 1 }}>
              {dojutsu?.jutsu.map((jut, index) => {
                return (
                  <Text
                    key={index}
                    style={{
                      color: COLORS.white,
                      ...FONTS.body3,
                      marginTop: 5,
                      textAlign: "right",
                    }}
                  >
                    {jut}
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
      style={{ flex: 1, backgroundColor: COLORS.primary }}
      showsVerticalScrollIndicator={false}
    >
      {renderHeader()}
      {renderImageAndName()}
      {renderInfoSection()}
    </ScrollView>
  );
};

export default DojutsuDetailScreen;
