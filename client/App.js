import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Header } from "./components/Header";
import { SearchSection } from "./components/SearchSection";
import { FeaturedProducts } from "./components/FeaturedProduct";

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
});

export default App;
