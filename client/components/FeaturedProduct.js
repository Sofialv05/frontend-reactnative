import { FlatList, StyleSheet, Text, View } from "react-native";
import { ProductCard } from "./Card";

export const FeaturedProducts = () => {
  const products = [
    {
      title: "HP 62 Black Ink Cartridge",
      model: "(HP62P04AE)",
      price: 9.49,
      image: require("../assets/hp.png"),
    },
    {
      title: "Canon MF-3110 Toner",
      model: "(C2P04AE)",
      price: 36.45,
      image: require("../assets/canon.png"),
    },
    {
      title: "HP 62 Black Ink Cartridge",
      model: "(HP62P04AE)",
      price: 5.99,
      image: require("../assets/hp.png"),
    },
  ];

  return (
    <View style={styles.featuredSection}>
      <Text style={styles.featuredTitle}>FEATURED PRODUCTS</Text>
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            model={item.model}
            price={item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  featuredSection: {
    padding: 20,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
