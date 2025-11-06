import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../Navigation/types';
import { t } from 'i18next';
type NavigationProp = NativeStackNavigationProp<MainStackParamList>;
const DistibuterHome = () => {
  const [selectedTab, setSelectedTab] = useState('Requests');
  const navigation = useNavigation<NavigationProp>();

  const handleRequestsPress = () => {
    setSelectedTab('Requests');
  };

  const handleInProgressPress = () => {
    setSelectedTab('In-Progress');
  };

  const handleDispatchedPress = () => {
    setSelectedTab('Dispatched');
  };

  const handleDeliveredPress = () => {
    setSelectedTab('Delivered');
  };

  const handleAcceptOrder1 = () => {
    console.log('Accept GreenLeaf Supplies order');
  };

  const handleRejectOrder1 = () => {
    console.log('Reject GreenLeaf Supplies order');
  };

  const handleAcceptOrder2 = () => {
    console.log('Accept City Pharma order');
  };

  const handleRejectOrder2 = () => {
    console.log('Reject City Pharma order');
  };

  const handleCallPress = () => {
    console.log('Call GreenLeaf Supplies');
  };

  const handleWhatsAppPress = () => {
    console.log('WhatsApp City Pharma');
  };

  const handleMenuPress = () => {
    console.log('Open menu');
  };

  const handleProfilePress = () => {
    console.log('Open profile');
  };

  const handleOrdersTab = () => {
    console.log('Orders tab');
  };

  const handleProductsTab = () => {
    console.log('Products tab');
  };

  const handleOutletsTab = () => {
    console.log('Outlets tab');
  };

  const handleReportsTab = () => {
    console.log('Reports tab');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Orders</Text>
        <TouchableOpacity onPress={handleProfilePress} style={styles.profileButton}>
          <View style={styles.profileIconCircle} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Requests' && styles.tabActive]}
            onPress={handleRequestsPress}>
            <Text style={[styles.tabText, selectedTab === 'Requests' && styles.tabTextActive]}>
              Requests
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedTab === 'In-Progress' && styles.tabActive]}
            onPress={handleInProgressPress}>
            <Text style={[styles.tabText, selectedTab === 'In-Progress' && styles.tabTextActive]}>
              In-Progress
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Dispatched' && styles.tabActive]}
            onPress={handleDispatchedPress}>
            <Text style={[styles.tabText, selectedTab === 'Dispatched' && styles.tabTextActive]}>
              Dispatched
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Delivered' && styles.tabActive]}
            onPress={handleDeliveredPress}>
            <Text style={[styles.tabText, selectedTab === 'Delivered' && styles.tabTextActive]}>
              Delivered
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Offline Banner */}
        <View style={styles.offlineBanner}>
          <Text style={styles.offlineIcon}>⚠</Text>
          <Text style={styles.offlineText}>
            Offline. Actions will sync when you're back online.
          </Text>
        </View>

        {/* Order 1 - GreenLeaf Supplies */}
        <View style={styles.orderCard}>
          <View style={styles.orderHeader}>
            <Text style={styles.orderTitle}>GreenLeaf Supplies</Text>
            <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
              <Text style={styles.callIcon}>📞</Text>
              <Text style={styles.callText}>Call</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.orderInfo}>
            Pincode 751001 • +91 98xxxxxx12 • Today 11:20 AM
          </Text>

          <Text style={styles.orderProduct}>Reusable Pad – Pack of 10</Text>

          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => {
              handleAcceptOrder1(); // optional log or logic
              navigation.navigate('CreateOrderPage');
            }}>
            <Text style={styles.acceptButtonText}>Accept</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.rejectButton} onPress={handleRejectOrder1}>
            <Text style={styles.rejectButtonText}>Reject</Text>
          </TouchableOpacity>
        </View>

        {/* Order 2 - City Pharma */}
        <View style={styles.orderCard}>
          <View style={styles.orderHeader}>
            <Text style={styles.orderTitle}>City Pharma</Text>
            <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsAppPress}>
              <Text style={styles.whatsappIcon}>💬</Text>
              <Text style={styles.whatsappText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.orderInfo}>
            Pincode 751004 • +91 99xxxxxx34 • Today 10:55 AM
          </Text>

          <Text style={styles.orderProduct}>Sanitary Napkins – Box of 24</Text>

          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => {
              handleAcceptOrder1(); // optional log or logic
              navigation.navigate('CreateOrderPage');
            }}>
            <Text style={styles.acceptButtonText}>Accept</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rejectButton} onPress={handleRejectOrder2}>
            <Text style={styles.rejectButtonText}>Reject</Text>
          </TouchableOpacity>
        </View>

        {/* Empty State */}
        <View style={styles.emptyState}>
          <View style={styles.emptyIconContainer}>
            <View style={styles.shopIcon}>
              <View style={styles.shopIconInner} />
            </View>
          </View>
          <Text style={styles.emptyTitle}>No new requests</Text>
          <Text style={styles.emptySubtitle}>You're all caught up for now!</Text>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={handleOrdersTab}>
          <View style={styles.navIconWrapper}>
            <View style={styles.ordersIcon} />
          </View>
          <Text style={styles.navLabelActive}>Orders</Text>
        </TouchableOpacity>
         
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            handleProductsTab();
            navigation.navigate('ManageOrder');
          }}>
          <View style={styles.navIconWrapper}>
            <View style={styles.productsIcon} />
          </View>
          <Text style={styles.navLabel}>Inventory</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.navItem} onPress={handleOutletsTab}>
          <View style={styles.navIconWrapper}>
            <View style={styles.outletsIcon} />
          </View>
          <Text style={styles.navLabel}>Campaign</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={handleReportsTab}>
          <View style={styles.navIconWrapper}>
            <View style={styles.reportsIcon} />
          </View>
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  menuButton: {
    padding: 4,
  },
  menuLine: {
    width: 22,
    height: 2.5,
    backgroundColor: '#000',
    marginBottom: 4,
    borderRadius: 2,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -35 }],
  },
  profileButton: {
    padding: 4,
  },
  profileIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#000',
  },
  tabsWrapper: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
  },
  tabsContainer: {
    paddingHorizontal: 16,
  },
  tab: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 22,
    marginRight: 8,
    backgroundColor: '#F0F0F0',
  },
  tabActive: {
    backgroundColor: '#00E676',
  },
  tabText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  tabTextActive: {
    color: '#1A1A1A',
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  offlineBanner: {
    backgroundColor: '#FFF9E6',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
  },
  offlineIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  offlineText: {
    flex: 1,
    fontSize: 13,
    color: '#6B5B2E',
    lineHeight: 18,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 16,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  callIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  callText: {
    fontSize: 13,
    color: '#2E7D32',
    fontWeight: '600',
  },
  whatsappButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  whatsappIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  whatsappText: {
    fontSize: 13,
    color: '#1976D2',
    fontWeight: '600',
  },
  orderInfo: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 10,
    lineHeight: 18,
  },
  orderProduct: {
    fontSize: 15,
    color: '#1A1A1A',
    marginBottom: 16,
    lineHeight: 20,
  },
  acceptButton: {
    backgroundColor: '#00E676',
    borderRadius: 28,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 10,
  },
  acceptButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  rejectButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 28,
    paddingVertical: 13,
    alignItems: 'center',
  },
  rejectButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#424242',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  emptyIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#C8E6C9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  shopIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#2E7D32',
    borderRadius: 8,
  },
  shopIconInner: {
    width: 24,
    height: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    position: 'absolute',
    top: 8,
    left: 8,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  bottomPadding: {
    height: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navIconWrapper: {
    marginBottom: 4,
  },
  ordersIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#00E676',
    borderRadius: 4,
  },
  productsIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#9E9E9E',
    borderRadius: 4,
  },
  outletsIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#9E9E9E',
    borderRadius: 4,
  },
  reportsIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#9E9E9E',
    borderRadius: 4,
  },
  navLabel: {
    fontSize: 11,
    color: '#757575',
    fontWeight: '500',
  },
  navLabelActive: {
    fontSize: 11,
    color: '#00E676',
    fontWeight: '600',
  },
});

export default DistibuterHome;