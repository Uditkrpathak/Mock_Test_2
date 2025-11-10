import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { playlists } from "../../assets/data/playlists";
import PlaylistCard from "./PlayListCard";

const PlaylistList = () => {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.title}>Doctor Curated Playlist</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
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
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E2D50",
  },
  seeAll: {
    fontSize: 10,
    color: "#919498ff",
    fontWeight: "600",
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default PlaylistList;
