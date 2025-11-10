import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { playlists } from "../../assets/data/playlists";
import PlaylistCard from "./PlayListCard";

const PlaylistList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlaylistCard
            title={item.title}
            episodes={item.episodes}
            color={item.color}
            image={item.image}
            icon={item.icon}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
});

export default PlaylistList;
