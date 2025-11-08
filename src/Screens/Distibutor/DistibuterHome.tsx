import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Other screens (replace with real ones)
import ManageOrder from './ManageOrder';
import CampaignScreen from './CampaignScreen';
import AnalyticsScreen from './AnalyticsScreen';
import DistProfileScreen from './DistProfileScreen';
// import ProfileScreen from './ProfileScreen';


const DistributorBottomTabs = () => {
  const [activeTab, setActiveTab] = useState('Orders');

  // =============== ORDERS TAB STATE =================
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<'Requests' | 'Dispatch' | 'Delivered'>('Requests');
  const distributorId = 1;

  const getStatusFromTab = () => {
    switch (selectedTab) {
      case 'Requests':
        return 'placed';
      case 'Dispatch':
        return 'accepted';
      case 'Delivered':
        return 'dispatched';
      default:
        return 'placed';
    }
  };

  const fetchOrders = async () => {
    const status = getStatusFromTab();
    try {
      setLoading(true);
      const response = await fetch(`http://192.168.1.9:5000/api/orders?status=${status}`);
      if (!response.ok) throw new Error('Failed to fetch orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong while fetching orders.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'Orders') fetchOrders();
  }, [selectedTab, activeTab]);

  const updateOrderStatus = async (orderId: number, currentStatus: string) => {
    let nextStatus = '';
    if (currentStatus === 'placed') nextStatus = 'accepted';
    else if (currentStatus === 'accepted') nextStatus = 'dispatched';
    else if (currentStatus === 'dispatched') nextStatus = 'delivered';
    else {
      Alert.alert('Info', 'This order has already been delivered.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`http://192.168.1.9:5000/api/orders/${orderId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ distributor_id: distributorId, status: nextStatus }),
      });

      if (!response.ok) throw new Error('Failed to update order status');
      Alert.alert('Success', `Order #${orderId} updated to ${nextStatus.toUpperCase()}`);
      fetchOrders();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update order status.');
    } finally {
      setLoading(false);
    }
  };

  const handleRejectOrder = (orderId: number) => {
    Alert.alert('Rejected', `Order #${orderId} has been rejected.`);
  };

  // =============== RENDER CONTENT =================
  const renderOrders = () => (
    <View style={{ flex: 1 }}>
      {/* Tabs */}
      <View style={styles.tabsWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
          {['Requests', 'Dispatch', 'Delivered'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, selectedTab === tab && styles.tabActive]}
              onPress={() => setSelectedTab(tab as any)}>
              <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Orders */}
      <ScrollView style={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#00E676" style={{ marginTop: 30 }} />
        ) : orders.length === 0 ? (
          <Text style={styles.emptyText}>No Orders Found</Text>
        ) : (
          orders.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <Text style={styles.orderTitle}>{order.orderer_name}</Text>
                <Text style={styles.statusText}>{order.status?.toUpperCase()}</Text>
              </View>

              <Text style={styles.orderDetail}>
                Product: <Text style={styles.bold}>{order.product_name}</Text>
              </Text>
              <Text style={styles.orderDetail}>Quantity: {order.quantity}</Text>
              <Text style={styles.orderDetail}>Orderer Type: {order.orderer_type}</Text>
              <Text style={styles.orderDetail}>
                Date: {new Date(order.created_at).toLocaleString()}
              </Text>

              <View style={styles.buttonRow}>
                {order.status !== 'delivered' && (
                  <TouchableOpacity
                    style={styles.deliverButton}
                    onPress={() => updateOrderStatus(order.id, order.status)}>
                    <Text style={styles.buttonText}>
                      {order.status === 'placed'
                        ? 'Accept'
                        : order.status === 'accepted'
                        ? 'Dispatch'
                        : 'Mark Delivered'}
                    </Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={styles.rejectButton}
                  onPress={() => handleRejectOrder(order.id)}>
                  <Text style={styles.buttonTextReject}>Reject</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );

  const renderScreen = () => {
    switch (activeTab) {
      case 'Orders':
        return renderOrders();
      case 'Inventory':
        return <ManageOrder />;
      case 'Campaign':
        return <CampaignScreen />;
      case 'Analytics':
        return <AnalyticsScreen />;
      case 'Profile':
        return <DistProfileScreen />;
      default:
        return renderOrders();
    }
  };

  // =============== MAIN UI =================
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        
        {renderScreen()}

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          {[
            { name: 'Orders', icon: 'cube-outline', filled: 'cube' },
            { name: 'Inventory', icon: 'layers-outline', filled: 'layers' },
            { name: 'Campaign', icon: 'megaphone-outline', filled: 'megaphone' },
            // { name: 'Analytics', icon: 'bar-chart-outline', filled: 'bar-chart' },
            { name: 'Profile', icon: 'person-outline', filled: 'person' },
          ].map((tab) => (
            <TouchableOpacity key={tab.name} style={styles.navItem} onPress={() => setActiveTab(tab.name)}>
              <Ionicons
                name={activeTab === tab.name ? tab.filled : tab.icon}
                size={24}
                color={activeTab === tab.name ? '#00E676' : '#777'}
              />
              <Text
                style={[
                  styles.navLabel,
                  activeTab === tab.name && styles.navLabelActive,
                ]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

// =============== STYLES =================
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  tabsWrapper: { backgroundColor: '#FFF', paddingVertical: 10 },
  tabsContainer: { paddingHorizontal: 16 },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 8,
  },
  tabActive: { backgroundColor: '#00E676' },
  tabText: { color: '#333', fontWeight: '500' },
  tabTextActive: { color: '#000', fontWeight: '700' },
  content: { padding: 16 },
  orderCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
  },
  orderHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  orderTitle: { fontSize: 16, fontWeight: '700', color: '#000' },
  statusText: { fontSize: 12, color: '#777' },
  orderDetail: { fontSize: 13, color: '#555', marginTop: 4 },
  bold: { fontWeight: '600' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  deliverButton: {
    flex: 1,
    backgroundColor: '#00E676',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#FFCDD2',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#000', fontWeight: '700' },
  buttonTextReject: { color: '#B71C1C', fontWeight: '700' },
  emptyText: { textAlign: 'center', marginTop: 40, color: '#999', fontSize: 16 },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    paddingVertical: 10,
  },
  navItem: { flex: 1, alignItems: 'center' },
  navLabel: { fontSize: 12, color: '#777', marginTop: 4 },
  navLabelActive: { fontSize: 12, color: '#00E676', fontWeight: '700', marginTop: 4 },
});

export default DistributorBottomTabs;
