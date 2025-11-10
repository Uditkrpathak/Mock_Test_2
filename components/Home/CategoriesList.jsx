import React from "react";
import { FlatList, View } from "react-native";
import { categories } from "../../assets/data/Categories";
import CategoryCard from "./CategoryCard";

const CategoriesList = () => {
  return (
    <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            name={item.name}
            icon={item.icon} // direct component
            color={item.color}
            onPress={() => console.log("Pressed:", item.name)}
          />
        )}
      />
    </View>
  );
};

export default CategoriesList;
