import { useState } from "react";
import { SearchBar } from "react-native-elements";
import { Feather, Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Header = () => {
  const [query, setQuery] = useState("");

  const updateSearch = (query) => {
    setQuery(query);
  };

  return (
    <View style={styles.header}>
      <View style={styles.searchContainer}>
        <SearchBar
          value={query}
          onChangeText={updateSearch}
          searchIcon={<Feather name="search" size={24} color="gray" />}
          inputContainerStyle={{
            height: 40,
            backgroundColor: "#e8eced",
            borderRadius: 8,
          }}
          inputStyle={{ color: "black" }}
          lightTheme
          autoCorrect={false}
          placeholder="Search"
          leftIconContainerStyle={{ width: 30, height: 30 }}
          containerStyle={{
            flex: 1,
            backgroundColor: "white",
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: 0,
            marginRight: 10,
          }}
          cancelIcon={
            <Ionicons name="arrow-back-outline" size={24} color="gray" />
          }
        />
        <TouchableOpacity style={styles.cartButton}>
          <Entypo name="shopping-cart" size={24} color="#ff9800" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    paddingTop: 40,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  cartButton: {
    borderRadius: 5,
    minWidth: 70,
    alignItems: "center",
  },
  cartButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Header;
