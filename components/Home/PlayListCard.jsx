import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PlaylistCard = ({ title, episodes, color, image, icon }) => (
  <TouchableOpacity style={[styles.card, { backgroundColor: color }]}>
    <View style={styles.row}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.episodes}>{episodes}</Text>
      </View>
      <Ionicons name={icon} size={26} color="#333" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  episodes: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
  },
});

export default PlaylistCard;
