import { View, Text, FlatList, RefreshControl } from "react-native";
import React from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";

import { COLORS, FONTS, SIZES } from "../constants";

const CharactersScreen = () => {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchCharacters = async (page = 1) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const response = await axios.get(
      `https://mern-api-nrt.herokuapp.com/api/characters?page=${page}`
    );
    setCharacters([...characters, ...response.data.results]);
    setLoading(false);
  };

  const reFetchCharacters = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const response = await axios.get(
      `https://mern-api-nrt.herokuapp.com/api/characters`
    );
    setCharacters(response.data.results);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => `${item.name}`}
      numColumns={2}
      style={{
        backgroundColor: COLORS.primary,
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CharacterCard character={item} />}
      contentContainerStyle={{
        marginTop: SIZES.padding,
        paddingBottom: SIZES.radius,
      }}
      ListHeaderComponent={
        <View
          style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding2 }}
        >
          <Text style={{ ...FONTS.h1, color: COLORS.white }}>Characters</Text>
        </View>
      }
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={reFetchCharacters}
          tintColor="#16c784"
        />
      }
      onEndReached={() => fetchCharacters(characters.length / 20 + 1)}
    />
  );
};

export default CharactersScreen;
