import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetailsScreen({ route, navigation }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedStore, setSelectedStore] = useState(null);

  // Sample product data (in a real app, this would come from the route params)
  const product = {
    id: "1",
    name: "Premium Brake Pads",
    price: 49.99,
    rating: 4.5,
    reviews: 128,
    description:
      "High-performance brake pads designed for optimal stopping power and durability. Features ceramic construction for reduced noise and dust.",
    specifications: [
      { label: "Position", value: "Front" },
      { label: "Material", value: "Ceramic" },
      { label: "Warranty", value: "12 months" },
      { label: "Fitment", value: "Direct Fit" },
    ],
    images: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
    stores: [
      { id: "1", name: "Downtown Store", distance: "2.5 miles", stock: 6 },
      { id: "2", name: "West Side Location", distance: "4.8 miles", stock: 3 },
      { id: "3", name: "South Center", distance: "6.2 miles", stock: 8 },
    ],
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Product Images */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.imageContainer}
        >
          {product.images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.productImage}
            />
          ))}
        </ScrollView>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>

          <View style={styles.ratingContainer}>
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons
                  key={star}
                  name={star <= product.rating ? "star" : "star-outline"}
                  size={20}
                  color="#FFD700"
                />
              ))}
            </View>
            <Text style={styles.reviews}>({product.reviews} Reviews)</Text>
          </View>
        </View>

        {/* Quantity Selector */}
        <View style={styles.quantityContainer}>
          <Text style={styles.sectionTitle}>Quantity</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={decrementQuantity}
            >
              <Ionicons name="remove" size={24} color="#666" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={incrementQuantity}
            >
              <Ionicons name="add" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Store Pickup */}
        <View style={styles.storeSection}>
          <Text style={styles.sectionTitle}>Pickup In Store</Text>
          {product.stores.map((store) => (
            <TouchableOpacity
              key={store.id}
              style={[
                styles.storeOption,
                selectedStore?.id === store.id && styles.selectedStore,
              ]}
              onPress={() => setSelectedStore(store)}
            >
              <View>
                <Text style={styles.storeName}>{store.name}</Text>
                <Text style={styles.storeDistance}>{store.distance}</Text>
                <Text style={styles.stockStatus}>{store.stock} in stock</Text>
              </View>
              {selectedStore?.id === store.id && (
                <Ionicons name="checkmark-circle" size={24} color="#e31837" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Product Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </View>

        {/* Specifications */}
        <View style={styles.specificationsSection}>
          <Text style={styles.sectionTitle}>Specifications</Text>
          {product.specifications.map((spec, index) => (
            <View key={index} style={styles.specificationRow}>
              <Text style={styles.specLabel}>{spec.label}</Text>
              <Text style={styles.specValue}>{spec.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.addToCartText}>
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    height: 300,
    backgroundColor: "#fff",
  },
  productImage: {
    width: 400,
    height: 300,
    resizeMode: "cover",
  },
  productInfo: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 24,
    color: "#e31837",
    fontWeight: "bold",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stars: {
    flexDirection: "row",
    marginRight: 8,
  },
  reviews: {
    color: "#666",
    fontSize: 14,
  },
  quantityContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 24,
  },
  storeSection: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16,
  },
  storeOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedStore: {
    borderColor: "#e31837",
    backgroundColor: "#fff5f5",
  },
  storeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  storeDistance: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  stockStatus: {
    fontSize: 14,
    color: "#4CAF50",
  },
  descriptionSection: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  specificationsSection: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16,
  },
  specificationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  specLabel: {
    fontSize: 14,
    color: "#666",
  },
  specValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  bottomBar: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  addToCartButton: {
    backgroundColor: "#e31837",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
