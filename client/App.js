import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ProductCard } from "./components/Card";
import { Header } from "./components/Header";
import { SearchSection } from "./components/SearchSection";

const FeaturedProducts = () => (
  <View style={styles.featuredSection}>
    <Text style={styles.featuredTitle}>FEATURED PRODUCTS</Text>
    <ScrollView horizontal style={styles.productsScroll}>
      <ProductCard
        title="HP 62 Black Ink Cartridge"
        model="(HP62P04AE)"
        price="9.49"
        image={require("./assets/hp.png")}
      />
      <ProductCard
        title="Canon MF-3110 Toner"
        model="(C2P04AE)"
        price="36.45"
        image={require("./assets/canon.png")}
      />
      <ProductCard
        title="HP 62 Black Ink Cartridge"
        model="(HP62P04AE)"
        price="5.99"
        image={require("./assets/hp.png")}
      />
    </ScrollView>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <SearchSection />
        <FeaturedProducts />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cartButton: {
    backgroundColor: "#ff9800",
    padding: 10,
    borderRadius: 5,
  },
  cartButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  searchSection: {
    padding: 20,
  },
  searchTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  searchTabs: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  activeTab: {
    backgroundColor: "#2196f3",
  },
  tabText: {
    textAlign: "center",
    color: "#666",
  },
  activeTabText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  searchForm: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    height: 50,
  },
  findButton: {
    backgroundColor: "#ff9800",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  findButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  featuredSection: {
    padding: 20,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  productsScroll: {
    flexDirection: "row",
  },
});

export default App;
