import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Library/Header";
import SearchBar from "../components/Library/SearchBar";
import FilterChipsList from "../components/Library/FilterChipsList";
import LibraryCardList from "../components/Library/LibraryCardList";

const LibraryScreen = () => {
                const [searchQuery, setSearchQuery] = React.useState("");

                return (
                                <View style={styles.root}>
                                                <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
                                                                <View style={styles.container}>
                                                                                <Header />
                                                                                <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
                                                                                <FilterChipsList />
                                                                                <LibraryCardList />
                                                                </View>
                                                </SafeAreaView>
                                </View>
                );
};

export default LibraryScreen;

const styles = StyleSheet.create({
                root: {
                                flex: 1,
                                backgroundColor: "#E4F0FC",
                },
                safeArea: {
                                flex: 1,
                },
                container: {
                                flex: 1,
                                paddingHorizontal: 16,
                },
});
