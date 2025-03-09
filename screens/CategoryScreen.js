import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryScreen({ route, navigation }) {
  const [sortBy, setSortBy] = useState("popular");
  const category = route.params?.category || {
    id: "1",
    name: "Brakes",
    icon: "🛑",
  };

  const products = [
    {
      id: "1",
      name: "Premium Brake Pads",
      price: 49.99,
      rating: 4.5,
      reviews: 128,
      image: "https://via.placeholder.com/150",
      brand: "StopTech",
    },
    {
      id: "2",
      name: "Performance Brake Rotors",
      price: 89.99,
      rating: 4.7,
      reviews: 67,
      image: "https://via.placeholder.com/150",
      brand: "Brembo",
    },
    {
      id: "3",
      name: "Ceramic Brake Pads",
      price: 59.99,
      rating: 4.3,
      reviews: 95,
      image: "https://via.placeholder.com/150",
      brand: "Akebono",
    },
    {
      id: "4",
      name: "Brake Caliper Kit",
      price: 129.99,
      rating: 4.6,
      reviews: 42,
      image: "https://via.placeholder.com/150",
      brand: "Wilwood",
    },
  ];

  const filters = [
    { id: "brand", name: "Brand" },
    { id: "price", name: "Price" },
    { id: "rating", name: "Rating" },
    { id: "availability", name: "Availability" },
  ];

  const sortOptions = [
    { id: "popular", name: "Most Popular" },
    { id: "price_low", name: "Price: Low to High" },
    { id: "price_high", name: "Price: High to Low" },
    { id: "rating", name: "Highest Rated" },
  ];

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.reviews}>({item.reviews} Reviews)</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Category Header */}
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>
          {category.icon} {category.name}
        </Text>
      </View>

      {/* Filters and Sort */}
      <View style={styles.filterSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
        >
          {filters.map((filter) => (
            <TouchableOpacity key={filter.id} style={styles.filterButton}>
              <Text style={styles.filterText}>{filter.name}</Text>
              <Ionicons name="chevron-down" size={16} color="#666" />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.sortButton}>
          <Ionicons name="options-outline" size={20} color="#333" />
          <Text style={styles.sortText}>Sort</Text>
        </TouchableOpacity>
      </View>

      {/* Sort Options */}
      <View style={styles.sortOptions}>
        {sortOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.sortOption,
              sortBy === option.id && styles.selectedSort,
            ]}
            onPress={() => setSortBy(option.id)}
          >
            <Text
              style={[
                styles.sortOptionText,
                sortBy === option.id && styles.selectedSortText,
              ]}
            >
              {option.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  filterSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  filterScroll: {
    flex: 1,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    marginRight: 8,
  },
  filterText: {
    marginRight: 4,
    color: "#333",
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  sortText: {
    marginLeft: 4,
    color: "#333",
  },
  sortOptions: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  sortOption: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  selectedSort: {
    backgroundColor: "#e31837",
  },
  sortOptionText: {
    color: "#666",
    fontSize: 14,
  },
  selectedSortText: {
    color: "#fff",
  },
  productList: {
    padding: 8,
  },
  productCard: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  productInfo: {
    padding: 12,
  },
  brand: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "#e31837",
    fontWeight: "bold",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  rating: {
    marginLeft: 4,
    marginRight: 4,
    color: "#666",
  },
  reviews: {
    color: "#666",
    fontSize: 12,
  },
  addToCartButton: {
    backgroundColor: "#e31837",
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
