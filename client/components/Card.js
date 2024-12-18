import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ProductCard = ({ title, model, price, image }) => {
  return (
    <View style={styles.productCard}>
      <Image source={image} style={styles.productImage} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productModel}>{model}</Text>
      <Text style={styles.productPrice}>${price}</Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: 200,
    height: 350,
    marginRight: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eee",
    justifyContent: "space-between",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productModel: {
    color: "#666",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2196f3",
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: "#ff9800",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
