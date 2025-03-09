import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VehicleScreen({ navigation }) {
  const [vehicles, setVehicles] = useState([
    {
      id: "1",
      year: "2019",
      make: "Toyota",
      model: "Camry",
      engine: "2.5L 4-Cylinder",
    },
  ]);

  const renderVehicle = ({ item }) => (
    <View style={styles.vehicleCard}>
      <View style={styles.vehicleInfo}>
        <Ionicons name="car" size={24} color="#e31837" />
        <View style={styles.vehicleDetails}>
          <Text style={styles.vehicleName}>
            {item.year} {item.make} {item.model}
          </Text>
          <Text style={styles.vehicleEngine}>{item.engine}</Text>
        </View>
      </View>
      <View style={styles.vehicleActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="create-outline" size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="trash-outline" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Add Vehicle Section */}
        <TouchableOpacity style={styles.addVehicleButton}>
          <Ionicons name="add-circle" size={24} color="#e31837" />
          <Text style={styles.addVehicleText}>Add a Vehicle</Text>
        </TouchableOpacity>

        {/* Vehicle Selection Guide */}
        <View style={styles.guideContainer}>
          <Text style={styles.guideTitle}>Why Add Your Vehicle?</Text>
          <View style={styles.guideItem}>
            <Ionicons name="checkmark-circle" size={24} color="#e31837" />
            <Text style={styles.guideText}>
              Get exact-fit parts for your vehicle
            </Text>
          </View>
          <View style={styles.guideItem}>
            <Ionicons name="time" size={24} color="#e31837" />
            <Text style={styles.guideText}>Save time with faster checkout</Text>
          </View>
          <View style={styles.guideItem}>
            <Ionicons name="notifications" size={24} color="#e31837" />
            <Text style={styles.guideText}>Receive maintenance reminders</Text>
          </View>
        </View>

        {/* Saved Vehicles */}
        {vehicles.length > 0 && (
          <View style={styles.savedVehiclesContainer}>
            <Text style={styles.sectionTitle}>Saved Vehicles</Text>
            <FlatList
              data={vehicles}
              renderItem={renderVehicle}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>
        )}

        {/* Recent Searches */}
        <View style={styles.recentSearchesContainer}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <TouchableOpacity style={styles.recentSearchItem}>
            <Ionicons name="time-outline" size={20} color="#666" />
            <Text style={styles.recentSearchText}>2018 Honda Civic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recentSearchItem}>
            <Ionicons name="time-outline" size={20} color="#666" />
            <Text style={styles.recentSearchText}>2020 Ford F-150</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  addVehicleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  addVehicleText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#e31837",
    fontWeight: "bold",
  },
  guideContainer: {
    backgroundColor: "#fff",
    margin: 16,
    marginTop: 0,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  guideTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  guideItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  guideText: {
    marginLeft: 12,
    fontSize: 14,
    color: "#666",
  },
  savedVehiclesContainer: {
    margin: 16,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  vehicleCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vehicleInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  vehicleDetails: {
    marginLeft: 12,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  vehicleEngine: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  vehicleActions: {
    flexDirection: "row",
  },
  actionButton: {
    padding: 8,
    marginLeft: 8,
  },
  recentSearchesContainer: {
    margin: 16,
    marginTop: 0,
  },
  recentSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 8,
  },
  recentSearchText: {
    marginLeft: 12,
    fontSize: 14,
    color: "#666",
  },
});
