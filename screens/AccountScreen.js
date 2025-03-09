import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AccountScreen({ navigation }) {
  const userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    rewards: 150,
    memberSince: "Jan 2024",
  };

  const menuItems = [
    {
      id: "1",
      title: "Orders",
      icon: "receipt",
      screen: "Orders",
    },
    {
      id: "2",
      title: "My Vehicles",
      icon: "car",
      screen: "Vehicle",
    },
    {
      id: "3",
      title: "Saved Items",
      icon: "heart",
      screen: "SavedItems",
    },
    {
      id: "4",
      title: "Addresses",
      icon: "location",
      screen: "Addresses",
    },
    {
      id: "5",
      title: "Payment Methods",
      icon: "card",
      screen: "PaymentMethods",
    },
    {
      id: "6",
      title: "Notifications",
      icon: "notifications",
      screen: "Notifications",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{userInfo.name}</Text>
            <Text style={styles.userEmail}>{userInfo.email}</Text>
            <Text style={styles.memberSince}>
              Member since {userInfo.memberSince}
            </Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="create-outline" size={24} color="#e31837" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Rewards Section */}
      <View style={styles.rewardsSection}>
        <View style={styles.rewardsInfo}>
          <View>
            <Text style={styles.rewardsTitle}>Speed Perks Rewards</Text>
            <Text style={styles.rewardsPoints}>{userInfo.rewards} Points</Text>
          </View>
          <TouchableOpacity style={styles.viewRewardsButton}>
            <Text style={styles.viewRewardsText}>View Benefits</Text>
            <Ionicons name="chevron-forward" size={20} color="#e31837" />
          </TouchableOpacity>
        </View>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progress,
              { width: `${(userInfo.rewards / 500) * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.rewardsProgress}>
          {350 - userInfo.rewards} points until next reward
        </Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons name={item.icon} size={24} color="#333" />
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton}>
        <Ionicons name="log-out" size={24} color="#e31837" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

      {/* App Version */}
      <Text style={styles.versionText}>Version 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  memberSince: {
    fontSize: 12,
    color: "#999",
  },
  editButton: {
    padding: 8,
  },
  rewardsSection: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 16,
  },
  rewardsInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  rewardsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  rewardsPoints: {
    fontSize: 16,
    color: "#e31837",
    fontWeight: "bold",
  },
  viewRewardsButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewRewardsText: {
    color: "#e31837",
    marginRight: 4,
    fontSize: 14,
    fontWeight: "500",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    marginBottom: 8,
  },
  progress: {
    height: "100%",
    backgroundColor: "#e31837",
    borderRadius: 4,
  },
  rewardsProgress: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  menuSection: {
    backgroundColor: "#fff",
    marginTop: 16,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
    color: "#333",
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 16,
    backgroundColor: "#fff",
  },
  signOutText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#e31837",
    fontWeight: "500",
  },
  versionText: {
    textAlign: "center",
    color: "#999",
    fontSize: 12,
    marginTop: 16,
    marginBottom: 32,
  },
});
