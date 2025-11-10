import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import CategoryList from "../components/Home/CategoriesList";
import Header from "../components/Home/Header";
import PlaylistList from "../components/Home/PlayList";
import SearchBar from "../components/Home/SearchBar";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Header />
      <View style={styles.contentWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <SearchBar />
          <CategoryList />
          <PlaylistList />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4F0FC", 
  },

  contentWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 8,
    elevation: 6,
  },

  scrollContent: {
    paddingHorizontal: 13,
    paddingTop: 25,
    paddingBottom: 30,
  },
});
