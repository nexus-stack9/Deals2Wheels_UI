import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const featuredCategories = [
    { id: 1, name: "Batteries", icon: "🔋" },
    { id: 2, name: "Brakes", icon: "🛑" },
    { id: 3, name: "Oil & Fluids", icon: "🛢️" },
    { id: 4, name: "Filters", icon: "⚙️" },
    { id: 5, name: "Wipers", icon: "💧" },
    { id: 6, name: "Lighting", icon: "💡" },
  ];

  const promotions = [
    {
      id: 1,
      title: "Save 20% on Batteries",
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: 2,
      title: "Free Oil Change Kit",
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: 3,
      title: "Summer Deals",
      image: "https://via.placeholder.com/300x150",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for parts, products, and more..."
        />
      </View>

      {/* Vehicle Selection */}
      <TouchableOpacity
        style={styles.vehicleSelector}
        onPress={() => navigation.navigate("Vehicle")}
      >
        <Ionicons name="car" size={24} color="#e31837" />
        <Text style={styles.vehicleText}>Add Your Vehicle</Text>
        <Ionicons name="chevron-forward" size={24} color="#666" />
      </TouchableOpacity>

      {/* Featured Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop by Category</Text>
        <View style={styles.categoriesGrid}>
          {featuredCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryItem}
              onPress={() => navigation.navigate("Category", { category })}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Promotions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Special Offers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {promotions.map((promo) => (
            <TouchableOpacity
              key={promo.id}
              style={styles.promotionCard}
              onPress={() => navigation.navigate("ProductDetails", { promo })}
            >
              <Image
                source={{ uri: promo.image }}
                style={styles.promotionImage}
              />
              <Text style={styles.promotionTitle}>{promo.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Services Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.servicesContainer}>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="build" size={24} color="#e31837" />
            <Text style={styles.serviceText}>Installation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="battery-charging" size={24} color="#e31837" />
            <Text style={styles.serviceText}>Battery Testing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="speedometer" size={24} color="#e31837" />
            <Text style={styles.serviceText}>Oil Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  vehicleSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 16,
    marginTop: 0,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "space-between",
  },
  vehicleText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    marginLeft: 8,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryItem: {
    width: (width - 48) / 3,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  promotionCard: {
    width: 300,
    marginRight: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  promotionImage: {
    width: "100%",
    height: 150,
  },
  promotionTitle: {
    padding: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  servicesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    margin: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  serviceText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
});
