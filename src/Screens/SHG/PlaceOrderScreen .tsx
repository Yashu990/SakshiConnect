import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

interface Product {
  id: number;
  product_id: number;
  product_name: string;
  quantity: number;
  unit_price: number;
}

const PlaceOrderScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch Distributor Inventory
  const fetchInventory = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://192.168.1.30:5000/api/distributor/1/inventory");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      Alert.alert("Error", "Failed to load inventory");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // Place Order Function
  const placeOrder = async (product_id: number) => {
    try {
      setLoading(true);
      const res = await fetch("http://192.168.1.30:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          distributor_id: 1,
          orderer_id: 2,
          product_id: product_id,
          quantity: 50, // You can make this dynamic later
        }),
      });

      if (res.ok) {
        Alert.alert("Success", "Order placed successfully!");
      } else {
        const errorData = await res.json();
        Alert.alert("Error", errorData.message || "Failed to place order");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong while placing order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Distributor Inventory</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#4C6EF5" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={{ flex: 1 }}>
                <Text style={styles.productName}>{item.product_name}</Text>
                <Text style={styles.productDetails}>
                  Stock: {item.quantity} | ₹{item.unit_price}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.orderButton}
                onPress={() => placeOrder(item.product_id)}
              >
                <Text style={styles.orderText}>Place Order</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default PlaceOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#212529",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DEE2E6",
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212529",
  },
  productDetails: {
    fontSize: 13,
    color: "#868E96",
  },
  orderButton: {
    backgroundColor: "#4C6EF5",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  orderText: {
    color: "#fff",
    fontWeight: "600",
  },
});
