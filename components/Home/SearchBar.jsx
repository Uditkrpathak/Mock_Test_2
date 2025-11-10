import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#555" />
      <TextInput
        placeholder="Search for symptom or condition..."
        style={styles.input}
        placeholderTextColor="#777"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 15,
    borderWidth: 1.5,
    borderColor: "#ccc", 
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
});
