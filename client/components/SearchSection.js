import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const SearchSection = () => {
  const [printerBrand, setPrinterBrand] = useState("");
  const [printerSeries, setPrinterSeries] = useState("");
  const [printerModel, setPrinterModel] = useState("");
  const [activeTab, setActiveTab] = useState("easy");

  return (
    <>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.logoText}>CARTRIDGE KINGS</Text>
      </View>
      <View style={styles.searchSection}>
        <Text style={styles.searchTitle}>
          FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
        </Text>

        <View style={styles.searchTabs}>
          <TouchableOpacity
            onPress={() => setActiveTab("easy")}
            style={[
              styles.tab,
              { borderTopLeftRadius: 5, borderBottomLeftRadius: 5 },
              activeTab === "easy" && styles.activeTab,
            ]}
          >
            <Text
              style={
                activeTab === "easy" ? styles.activeTabText : styles.tabText
              }
            >
              3-Step Easy Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("serial")}
            style={[
              styles.tab,
              { borderTopRightRadius: 5, borderBottomRightRadius: 5 },
              activeTab === "serial" && styles.activeTab,
            ]}
          >
            <Text
              style={
                activeTab === "serial" ? styles.activeTabText : styles.tabText
              }
            >
              Search by Serial Number
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchForm}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={printerBrand}
              onValueChange={(value) => setPrinterBrand(value)}
              style={styles.picker}
            >
              <Picker.Item label="1. Printer Brand" value="" />
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={printerSeries}
              onValueChange={(value) => setPrinterSeries(value)}
              style={styles.picker}
            >
              <Picker.Item label="2. Printer Series" value="" />
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={printerModel}
              onValueChange={(value) => setPrinterModel(value)}
              style={styles.picker}
            >
              <Picker.Item label="3. Printer Model" value="" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.findButton}>
            <Text style={styles.findButtonText}>FIND CARTRIDGES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchSection: {
    padding: 20,
  },
  searchTitle: {
    fontSize: 16,
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
});
