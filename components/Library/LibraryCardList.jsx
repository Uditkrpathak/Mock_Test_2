import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { libraryData } from "../../assets/data/libraryData";
import LibraryCardItem from "./LibraryCardItem";

const LibraryCardList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={libraryData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <LibraryCardItem item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
};

export default LibraryCardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4F0FC",
  },
});
