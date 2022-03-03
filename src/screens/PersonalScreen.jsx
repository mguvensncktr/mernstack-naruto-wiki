import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";

const PersonalScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: COLORS.white }}
    >
      <View
        style={{
          marginHorizontal: SIZES.padding2,
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ color: COLORS.black, ...FONTS.h2 }}>Rank</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{ color: COLORS.black, ...FONTS.body3, fontWeight: "bold" }}
          >
            Ninja Rank
          </Text>
          {character?.rank.ninjaRank.map((rank, index) => {
            return (
              <Text key={index} style={{ color: COLORS.black, ...FONTS.body3 }}>
                {rank}
              </Text>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{ color: COLORS.black, ...FONTS.body3, fontWeight: "bold" }}
          >
            Academy Graduation Age
          </Text>
          <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
            {character?.rank.acadGradAge}
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
            style={{ color: COLORS.black, ...FONTS.body3, fontWeight: "bold" }}
          >
            Sex
          </Text>
          <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
            {character?.sex}
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
            style={{ color: COLORS.black, ...FONTS.body3, fontWeight: "bold" }}
          >
            Birthdate
          </Text>
          <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
            {character?.birthdate}
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
            style={{ color: COLORS.black, ...FONTS.body3, fontWeight: "bold" }}
          >
            Age
          </Text>
          <View>
            {character?.age.map((age, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.black,
                    ...FONTS.body3,
                    marginTop: 5,
                  }}
                >
                  {age}
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
            style={{ color: COLORS.black, ...FONTS.body3, fontWeight: "bold" }}
          >
            Blood Type
          </Text>
          <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
            {character?.bloodType}
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
            style={{ color: COLORS.black, ...FONTS.body3, fontWeight: "bold" }}
          >
            Occupation
          </Text>
          <View>
            {character?.occupation.map((occ, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.black,
                    ...FONTS.body3,
                    marginTop: 5,
                  }}
                >
                  {occ}
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
            style={{ color: COLORS.black, ...FONTS.body3, fontWeight: "bold" }}
          >
            Affiliations
          </Text>
          <View>
            {character?.affiliations.map((aff, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.black,
                    ...FONTS.body3,
                    marginTop: 5,
                    alignSelf: "flex-end",
                  }}
                >
                  {aff}
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
              color: COLORS.black,
              ...FONTS.body3,
              fontWeight: "bold",
            }}
          >
            Kekkei Genkai's
          </Text>
          <View>
            {character?.kekkeiGenkai.map((kg, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.black,
                    ...FONTS.body3,
                    marginTop: 5,
                    alignSelf: "flex-end",
                  }}
                >
                  {kg}
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
              color: COLORS.black,
              ...FONTS.body3,
              fontWeight: "bold",
            }}
          >
            Classification
          </Text>
          <View>
            {character?.classification.map((clss, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.black,
                    ...FONTS.body3,
                    marginTop: 5,
                    alignSelf: "flex-end",
                  }}
                >
                  {clss}
                </Text>
              );
            })}
          </View>
        </View>
        {character?.tailedBeasts.length > 0 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.body3,
                fontWeight: "bold",
              }}
            >
              Tailed Beasts
            </Text>
            <View>
              {character?.tailedBeasts.map((tb, index) => {
                return (
                  <Text
                    key={index}
                    style={{
                      color: COLORS.black,
                      ...FONTS.body3,
                      marginTop: 5,
                      alignSelf: "flex-end",
                    }}
                  >
                    {tb}
                  </Text>
                );
              })}
            </View>
          </View>
        )}
        {character?.status != "No info about Status" && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.body3,
                fontWeight: "bold",
              }}
            >
              Birthdate
            </Text>
            <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
              {character?.birthdate}
            </Text>
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
              color: COLORS.black,
              ...FONTS.body3,
              fontWeight: "bold",
            }}
          >
            Team
          </Text>
          <View>
            {character?.team.map((team, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.black,
                    ...FONTS.body3,
                    marginTop: 5,
                    alignSelf: "flex-end",
                  }}
                >
                  {team}
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
              color: COLORS.black,
              ...FONTS.body3,
              fontWeight: "bold",
            }}
          >
            Clan
          </Text>
          <View>
            {character?.clan.map((cln, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => console.log("Clan pressed")}
                >
                  <Text
                    style={{
                      color: COLORS.black,
                      ...FONTS.body3,
                      marginTop: 5,
                      alignSelf: "flex-end",
                    }}
                  >
                    {cln}
                  </Text>
                </TouchableOpacity>
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
              color: COLORS.black,
              ...FONTS.body3,
              fontWeight: "bold",
            }}
          >
            Family
          </Text>
          <View>
            {character?.family.map((fam, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.black,
                    ...FONTS.body3,
                    marginTop: 5,
                    alignSelf: "flex-end",
                  }}
                >
                  {fam}
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
              color: COLORS.black,
              ...FONTS.body3,
              fontWeight: "bold",
            }}
          >
            Nature Type
          </Text>
          <View>
            {character?.natureType.map((nt, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: COLORS.black,
                    ...FONTS.body3,
                    marginTop: 5,
                    alignSelf: "flex-end",
                    overflow: "hidden",
                  }}
                >
                  {nt.trim()}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PersonalScreen;
