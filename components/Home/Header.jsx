import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <View style={styles.logo}>
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
        <Text style={styles.heading}>
          Understand medical conditions with{" "}
          <Text style={styles.highlight}>Doctor Approved Audio</Text>
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Browse Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4F0FC",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  logo: {
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

  heroContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  heading: {
    fontSize: 18,
    textAlign: "center",
    color: "#1E2D50",
    lineHeight: 26,
    fontWeight: "500",
    marginBottom: 20,
  },

  highlight: {
    color: "#007BFF",
    fontWeight: "700",
  },

  button: {
    backgroundColor: "#007BFF",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
    shadowColor: "#007BFF",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
