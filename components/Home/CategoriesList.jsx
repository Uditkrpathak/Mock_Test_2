import React from "react";
import { FlatList, View ,Text} from "react-native";
import { categories } from "../../assets/data/Categories";
import CategoryCard from "./CategoryCard";

const CategoriesList = () => {
  return (
    <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
                <Text style={{fontSize:14,fontWeight:500,marginBottom:10}}>Browse By Categories</Text>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            name={item.name}
            icon={item.icon} 
            color={item.color}
            onPress={() => console.log("Pressed:", item.name)}
          />
        )}
      />
    </View>
  );
};

export default CategoriesList;
