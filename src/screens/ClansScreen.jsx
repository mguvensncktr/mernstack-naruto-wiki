import { View, Text, FlatList, RefreshControl, Image } from "react-native";
import React from "react";
import ClanListItem from "../components/ClanListItem";
import axios from "axios";

import { COLORS, FONTS, SIZES } from "../constants";

const ClansScreen = () => {
  const [clans, setClans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchClans = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const response = await axios.get(
      `https://mern-api-nrt.herokuapp.com/api/clans?limit=60`
    );
    setClans(response.data.results);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchClans();
  }, []);

  const renderItem = ({ item }) => {
    return <ClanListItem clan={item} />;
  };

  return (
    <FlatList
      data={clans}
      keyExtractor={(item) => `${item.name}`}
      numColumns={2}
      style={{
        backgroundColor: COLORS.white,
        paddingHorizontal: 10,
      }}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      contentContainerStyle={{
        marginTop: SIZES.padding,
        paddingBottom: SIZES.radius,
      }}
      ListHeaderComponent={
        <View
          style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding2 }}
        >
          <Text style={{ ...FONTS.h1, color: COLORS.primary }}>Clans</Text>
        </View>
      }
    />
  );
};

export default ClansScreen;
