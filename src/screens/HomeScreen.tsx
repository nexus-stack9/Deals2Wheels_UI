import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

// Colors
const COLORS = {
  primary: '#007AFF',
  text: '#333333',
  lightText: '#999999',
  background: '#FFFFFF',
  searchBg: '#F2F2F2',
  bannerBg: '#F5F5F5',
  border: '#EEEEEE',
};

// Header Component
const Header = memo(() => (
  <View style={styles.header}>
    <View style={styles.headerRight}>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons
          name="notifications-none"
          size={24}
          color={COLORS.lightText}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons
          name="person-outline"
          size={24}
          color={COLORS.lightText}
        />
      </TouchableOpacity>
    </View>
  </View>
));

// Search Bar Component
const SearchBar = memo(() => (
  <View style={styles.searchBarContainer}>
    <MaterialIcons name="search" size={20} color={COLORS.lightText} />
    <Text style={styles.searchText}>Search parts, brands, or vehicles</Text>
  </View>
));

// Banner Component
const Banner = memo(() => (
  <View style={styles.bannerCard}>
    <Text style={styles.bannerTitle}>Summer Sale</Text>
    <Text style={styles.bannerSubtitle}>Up to 50% off on all parts</Text>
  </View>
));

// Category Item Component
const CategoryItem = memo(({category}: {category: (typeof categories)[0]}) => (
  <TouchableOpacity style={styles.categoryItem}>
    <View style={styles.categoryIcon}>
      <MaterialIcons name={category.icon} size={22} color={COLORS.primary} />
    </View>
    <Text style={styles.categoryName}>{category.name}</Text>
  </TouchableOpacity>
));

// Categories Section Component
const CategoriesSection = memo(() => (
  <View style={styles.categoriesContainer}>
    <Text style={styles.sectionTitle}>Categories</Text>
    <View style={styles.categoriesGrid}>
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </View>
  </View>
));

// Product Card Component
const ProductCard = memo(
  ({product}: {product: (typeof featuredProducts)[0]}) => (
    <TouchableOpacity style={styles.productCard}>
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{product.discount}% OFF</Text>
      </View>
      <Image
        source={{uri: product.image}}
        style={styles.productImage}
        resizeMode="cover"
      />
      <View style={styles.productInfo}>
        <Text style={styles.productBrand}>{product.brand}</Text>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.productFooter}>
          <Text style={styles.productPrice}>${product.price}</Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{product.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ),
);

// Featured Products Section Component
const FeaturedProductsSection = memo(() => (
  <View style={styles.featuredContainer}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllButton}>See All</Text>
      </TouchableOpacity>
    </View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.featuredScrollContent}>
      {featuredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ScrollView>
  </View>
));

// Bottom Navigation Component
// const BottomNavigation = memo(() => (
//   <View style={styles.bottomNav}>
//     <TouchableOpacity style={styles.navItem}>
//       <MaterialIcons name="home" size={24} color={COLORS.primary} />
//       <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.navItem}>
//       <MaterialIcons name="search" size={24} color={COLORS.lightText} />
//       <Text style={styles.navText}>Search</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.navItem}>
//       <MaterialIcons name="shopping-cart" size={24} color={COLORS.lightText} />
//       <Text style={styles.navText}>Cart</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.navItem}>
//       <MaterialIcons name="person-outline" size={24} color={COLORS.lightText} />
//       <Text style={styles.navText}>Profile</Text>
//     </TouchableOpacity>
//   </View>
// ));

const categories = [
  {id: 1, name: 'Engine Parts', icon: 'settings'},
  {id: 2, name: 'Brakes', icon: 'adjust'},
  {id: 3, name: 'Filters', icon: 'filter-alt'},
  {id: 4, name: 'Batteries', icon: 'power'},
  {id: 5, name: 'Tires', icon: 'radio-button-unchecked'},
  {id: 6, name: 'Oil & Fluids', icon: 'opacity'},
  {id: 7, name: 'Tools', icon: 'build'},
  {id: 8, name: 'Accessories', icon: 'settings-input-component'},
];

const featuredProducts = [
  {
    id: 1,
    name: 'Brake Pads',
    brand: 'Bosch',
    price: 49.99,
    image: 'https://via.placeholder.com/150',
    rating: 4.5,
    discount: 15,
  },
  {
    id: 2,
    name: 'Oil Filter',
    brand: 'Fram',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
    rating: 4.2,
    discount: 10,
  },
  {
    id: 3,
    name: 'Air Filter',
    brand: 'K&N',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
    rating: 4.7,
    discount: 20,
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}>
        <Header />
        <SearchBar />
        <Banner />
        <CategoriesSection />
        <FeaturedProductsSection />
      </ScrollView>
      {/* <BottomNavigation /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.background,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.searchBg,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
  },
  searchText: {
    marginLeft: 12,
    color: COLORS.lightText,
    fontSize: 14,
  },
  bannerCard: {
    backgroundColor: COLORS.bannerBg,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: COLORS.lightText,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  categoryItem: {
    width: width / 4 - 16,
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 20,
  },
  categoryIcon: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    color: COLORS.text,
    textAlign: 'center',
  },
  featuredContainer: {
    padding: 16,
  },
  featuredScrollContent: {
    paddingRight: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllButton: {
    color: COLORS.primary,
    fontSize: 16,
  },
  productCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productInfo: {
    padding: 12,
  },
  productBrand: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingVertical: 8,
    backgroundColor: COLORS.background,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  navText: {
    fontSize: 12,
    color: COLORS.lightText,
    marginTop: 4,
  },
  navTextActive: {
    color: COLORS.primary,
  },
});

export default HomeScreen;
