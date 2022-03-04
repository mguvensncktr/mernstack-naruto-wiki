import { View, Text, FlatList } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import axios from "axios";
import DojutsuItemCard from "../components/DojutsuItemCard";

const DojutsuScreen = () => {
  const [dojutsu, setDojutsu] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchDojutsu = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const response = await axios.get(
      "https://mern-api-nrt.herokuapp.com/api/dojutsus"
    );
    setDojutsu(response.data.results);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchDojutsu();
  }, []);

  return (
    <FlatList
      data={dojutsu}
      keyExtractor={(item) => `${item.name}`}
      style={{
        backgroundColor: COLORS.primary,
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <DojutsuItemCard dojutsu={item} />}
      contentContainerStyle={{
        marginTop: SIZES.padding,
        paddingBottom: SIZES.radius,
      }}
      ListHeaderComponent={
        <View
          style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding2 }}
        >
          <Text style={{ ...FONTS.h1, color: COLORS.white }}>Dojutsu's</Text>
        </View>
      }
    />
  );
};

export default DojutsuScreen;
