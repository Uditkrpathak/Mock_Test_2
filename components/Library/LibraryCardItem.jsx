import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LibraryCardItem = ({ item }) => {
  return (
    <View style={styles.card}>
   
      <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
        <Ionicons name={item.icon} size={40} color="#1E2D50" />
      </View>
        <View style={styles.info}>

        <View style={styles.topRow}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

    
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color="#6B7280" />
            <Text style={styles.metaText}>{item.updated}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="play-circle-outline" size={14} color="#6B7280" />
            <Text style={styles.metaText}>{item.episodes} Episodes</Text>
          </View>
        </View>

        <View style={styles.listSection}>
          <Text style={styles.subtitle}>🫁 {item.subtitle1}</Text>
          <Text style={styles.subtitle}>🫁 {item.subtitle2}</Text>
          <Text style={styles.more}>+ {item.more} more</Text>
        </View>
      </View>
    </View>
  );
};

export default LibraryCardItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  iconContainer: {
    width: 84,
    height: 84,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },
  info: {
    flex: 1,
  },
  topRow: {
    marginBottom: 6,
  },
  title: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E293B",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 6,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },
  metaText: {
    fontSize: 9,
    color: "#6B7280",
    marginLeft: 4,
  },
  listSection: {
    marginTop: 4,
  },
  subtitle: {
    fontSize: 10,
    color: "#374151",
    marginTop: 3,
  },
  more: {
    fontSize: 9,
    color: "#2563EB",
    marginTop: 6,
    fontWeight: "500",
  },
});
