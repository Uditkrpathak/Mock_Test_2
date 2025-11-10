import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const filters = [
  { label: "Categories", icon: "grid-outline" },
  { label: "Symptoms", icon: "medkit-outline" },
  { label: "Duration", icon: "time-outline" },
  { label: "Remedies", icon: "leaf-outline" },
];

const FilterChipsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={filters}
        keyExtractor={(item) => item.label}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chip}>
            <Ionicons name={item.icon} size={18} color="#007BFF" style={styles.icon} />
            <Text style={styles.chipText}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FilterChipsList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  icon: {
    marginRight: 6,
  },
  chipText: {
    color: "#000",
    fontWeight: "500",
  },
});
