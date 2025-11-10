import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Image
            style={styles.image}
            source={require("../../assets/images/logo.png")}
          />
          <Text style={styles.name}>HealthCast</Text>
        </View>

        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.heroContainer}>
        <Text style={styles.heading}>Library</Text>
        <Text>Doctor approved audio episodes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4F0FC",
    paddingHorizontal: 6,
    paddingTop: 10,
    paddingBottom: 25,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E2D50",
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#007BFF",
  },

  heading: {
    fontSize: 22,
    color: "#1E2D50",
    fontWeight: "600",
    marginBottom: 12,
  },

});
