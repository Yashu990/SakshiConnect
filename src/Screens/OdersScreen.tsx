import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,

  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
type Order = {
  id: string;
  company: string;
  date: string;
  items: number;
  units: number;
  status: 'Pending' | 'Dispatched' | 'Delivered';
};

const OrdersScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState<'Pending' | 'Dispatched' | 'Delivered'>('Pending');

  // ✅ Sample Data
  const currentOrders: Order[] = [
    { id: '#845B3', company: 'Global Supplies Inc.', date: '15 Oct 2023', items: 5, units: 120, status: 'Pending' },
    { id: '#729F1', company: 'Farm Fresh Co.', date: '14 Oct 2023', items: 3, units: 80, status: 'Dispatched' },
  ];

  const pastOrders: Order[] = [
    { id: '#611C8', company: 'Staples & Goods', date: '12 Oct 2023', items: 8, units: 250, status: 'Delivered' },
  ];

  const filteredOrders = currentOrders.filter(o => o.status === selectedTab);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#0F172A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Orders</Text>
        <TouchableOpacity>
          <Text style={styles.plusIcon}>＋</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Tabs */}
        <View style={styles.tabs}>
          {['Pending', 'Dispatched', 'Delivered'].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                selectedTab === tab && styles.tabButtonActive,
              ]}
              onPress={() => setSelectedTab(tab as any)}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.tabTextActive,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Current Orders */}
        <View style={styles.listContainer}>
          {filteredOrders.length === 0 ? (
            <Text style={styles.emptyText}>No {selectedTab} orders</Text>
          ) : (
            filteredOrders.map(item => (
              <View key={item.id} style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.company}>{item.company}</Text>
                  <View
                    style={[
                      styles.statusBadge,
                      item.status === 'Pending'
                        ? styles.badgePending
                        : item.status === 'Dispatched'
                          ? styles.badgeDispatched
                          : styles.badgeDelivered,
                    ]}>
                    <Text style={styles.badgeText}>{item.status}</Text>
                  </View>
                </View>

                <Text style={styles.details}>
                  ID: {item.id} • {item.date}
                </Text>
                <Text style={styles.details}>
                  {item.items} items • {item.units} units
                </Text>
              </View>
            ))
          )}
        </View>

        {/* Past Orders */}
        <View style={styles.pastOrdersSection}>
          <Text style={styles.sectionTitle}>Past Orders</Text>
          {pastOrders.map(item => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.company}>{item.company}</Text>
                <View style={[styles.statusBadge, styles.badgeDelivered]}>
                  <Text style={styles.badgeText}>{item.status}</Text>
                </View>
              </View>
              <Text style={styles.details}>
                ID: {item.id} • {item.date}
              </Text>
              <Text style={styles.details}>
                {item.items} items • {item.units} units
              </Text>
              <TouchableOpacity>
                <Text style={styles.invoiceLink}>View invoice</Text>
              </TouchableOpacity>
            </View>
          ))}

          <Text style={styles.noteText}>
            Delivered orders add to stock automatically.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  menuIcon: {
    fontSize: 22,
  },
  plusIcon: {
    fontSize: 22,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
  tabButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  tabButtonActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  tabText: {
    color: '#555',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  company: {
    fontSize: 16,
    fontWeight: '700',
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    color: '#fff',
  },
  badgePending: { backgroundColor: '#FBBF24' },
  badgeDispatched: { backgroundColor: '#60A5FA' },
  badgeDelivered: { backgroundColor: '#34D399' },
  details: {
    color: '#555',
    marginTop: 4,
  },
  invoiceLink: {
    color: '#2563EB',
    fontWeight: '600',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 16,
    color: '#111',
  },
  pastOrdersSection: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  noteText: {
    textAlign: 'center',
    color: '#777',
    marginVertical: 14,
    fontSize: 12,
  },
  emptyText: {
    textAlign: 'center',
    color: '#777',
    marginTop: 30,
  },
});
