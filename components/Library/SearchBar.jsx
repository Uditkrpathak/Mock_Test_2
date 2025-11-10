// import React from "react";
// import { View, TextInput, StyleSheet } from "react-native";

// export default function SearchBar({ value, onChangeText }) {
//   return (
//     <View style={styles.wrap}>
//       <TextInput
//         value={value}
//         onChangeText={onChangeText}
//         placeholder="Search for symptom or condition..."
//         style={styles.input}
//         placeholderTextColor="#9AA7B2"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrap: {
//     marginTop: 6,
//     marginBottom: 10,
//   },
//   input: {
//     backgroundColor: "#fff",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 12,
//     fontSize: 14,
//     shadowColor: "#000",
//     shadowOpacity: 0.03,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 1,
//   },
// });

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.wrap}>
      <Ionicons name="search-outline" size={20} color="#6B7280" style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search for symptom or condition..."
        style={styles.input}
        placeholderTextColor="#9AA7B2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "relative",
    marginTop: 1,
    marginBottom: 16,
  },
  icon: {
    position: "absolute",
    top: 14,
    left: 14,
    zIndex: 1,
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingLeft: 42,
    paddingRight: 16,
    borderRadius: 14,
    fontSize: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
});
