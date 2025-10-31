import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const MainPage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.greeting}>Namaste, Priya</Text>
          <Text style={styles.role}>SHG Leader</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>A+</Text>
        </View>
      </View>

      {/* Wallet Balance Card */}
      <View style={styles.walletCard}>
        <View>
          <Text style={styles.walletTitle}>Wallet Balance</Text>
          <Text style={styles.walletAmount}>₹12,450</Text>
          <Text style={styles.walletSubtitle}>Available Balance</Text>
        </View>
        <View style={styles.walletIconContainer}>
          <Ionicons name="wallet-outline" size={30} color="#fff" />
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="cart-outline" size={28} color="#4C6EF5" />
          <Text style={styles.actionTitle}>New Order</Text>
          <Text style={styles.actionSubtitle}>Place bulk order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionCard, styles.pinkCard]}>
          <Ionicons name="cube-outline" size={28} color="#F06595" />
          <Text style={styles.actionTitle}>Inventory</Text>
          <Text style={styles.actionSubtitle}>Check stock</Text>
        </TouchableOpacity>
      </View>

      {/* Inventory Alerts */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Inventory Alerts</Text>
          <View style={styles.alertBadge}>
            <Text style={styles.alertBadgeText}>2 Items</Text>
          </View>
        </View>

        <View style={[styles.alertCard, { backgroundColor: "#FFF5F5" }]}>
          <View style={styles.alertDotRed} />
          <View>
            <Text style={styles.alertTitle}>Reusable Pads</Text>
            <Text style={styles.alertSubtitle}>Large size</Text>
          </View>
          <Text style={[styles.alertStatus, { color: "#E03131" }]}>Low Stock</Text>
        </View>

        <View style={[styles.alertCard, { backgroundColor: "#FFF9DB" }]}>
          <View style={styles.alertDotYellow} />
          <View>
            <Text style={styles.alertTitle}>Menstrual Cups</Text>
            <Text style={styles.alertSubtitle}>Standard size</Text>
          </View>
          <Text style={[styles.alertStatus, { color: "#E67700" }]}>Running Low</Text>
        </View>
      </View>

      {/* Recent Orders */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.orderCard}>
          <View style={styles.orderLeft}>
            <Ionicons name="checkmark-circle" size={22} color="#37B24D" />
            <View>
              <Text style={styles.orderTitle}>Order #2345</Text>
              <Text style={styles.orderSubtitle}>Reusable Pads - 50 units</Text>
            </View>
          </View>
          <Text style={[styles.status, { backgroundColor: "#D3F9D8", color: "#2B8A3E" }]}>
            Delivered
          </Text>
        </View>

        <View style={styles.orderCard}>
          <View style={styles.orderLeft}>
            <Ionicons name="cube-outline" size={22} color="#4C6EF5" />
            <View>
              <Text style={styles.orderTitle}>Order #2344</Text>
              <Text style={styles.orderSubtitle}>Menstrual Cups - 30 units</Text>
            </View>
          </View>
          <Text style={[styles.status, { backgroundColor: "#DBE4FF", color: "#364FC7" }]}>
            In Transit
          </Text>
        </View>
      </View>

      {/* Bottom Space */}
      <View style={{ height: 80 }} />
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },

  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  greeting: { fontSize: 16, fontWeight: "600", color: "#212529" },
  role: { fontSize: 14, color: "#4C6EF5" },
  badge: {
    marginLeft: "auto",
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: { fontWeight: "700", color: "#343A40" },

  walletCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4C6EF5",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  walletTitle: { color: "#E9ECEF", fontSize: 14 },
  walletAmount: { color: "#fff", fontSize: 28, fontWeight: "700" },
  walletSubtitle: { color: "#E9ECEF", fontSize: 12 },
  walletIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  actionsRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  actionCard: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#DEE2E6",
    borderRadius: 12,
    marginHorizontal: 4,
  },
  pinkCard: { borderColor: "#F8D7DA" },
  actionTitle: { fontWeight: "600", marginTop: 6, color: "#212529" },
  actionSubtitle: { fontSize: 12, color: "#868E96" },

  section: { marginBottom: 20 },
  sectionHeader: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "600", color: "#212529" },
  alertBadge: {
    marginLeft: 8,
    backgroundColor: "#FFF0F6",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  alertBadgeText: { fontSize: 12, color: "#C2255C" },

  alertCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  alertDotRed: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FA5252",
    marginRight: 8,
  },
  alertDotYellow: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FAB005",
    marginRight: 8,
  },
  alertTitle: { fontWeight: "600", color: "#212529" },
  alertSubtitle: { fontSize: 12, color: "#868E96" },
  alertStatus: { fontWeight: "600" },

  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#F1F3F5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  orderLeft: { flexDirection: "row", alignItems: "center", gap: 8 },
  orderTitle: { fontWeight: "600", color: "#212529" },
  orderSubtitle: { fontSize: 12, color: "#868E96" },
  status: {
    fontSize: 12,
    fontWeight: "600",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  viewAll: { color: "#4C6EF5", fontSize: 13, fontWeight: "600", marginLeft: "auto" },
});
