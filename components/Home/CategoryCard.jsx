import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CategoryCard = ({ name, icon, color, onPress }) => (
                
  <TouchableOpacity
    style={[styles.card, { backgroundColor: color }]}
    activeOpacity={0.8}
    onPress={onPress}
  >
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.text}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 90,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 50,
  },
  text: {
    marginTop: 8,
    fontWeight: "600",
    color: "#333",
    fontSize: 14,
  },
});

export default CategoryCard;
