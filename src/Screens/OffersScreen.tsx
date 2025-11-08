import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const OffersScreen: React.FC = () => {
  const handleCall = (name: string) => {
    Alert.alert(`Calling ${name}`);
  };

  const handleWhatsApp = (name: string) => {
    Alert.alert(`Opening WhatsApp chat with ${name}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Offline Banner */}
      <View style={styles.offlineBanner}>
        <Ionicons name="warning-outline" size={20} color="#A16207" />
        <Text style={styles.offlineText}>
          You’re offline. Calls/WhatsApp will be saved and shared when online.
        </Text>
      </View>

      {/* Offer Header */}
      <View style={styles.offerCard}>
        <Text style={styles.offerTitle}>Reusable Pad</Text>
        <Text style={styles.offerSubtitle}>
          Call/WhatsApp to order. Distributor will enter it; see status in
          Orders.
        </Text>
        <View style={styles.deliveryTag}>
          <Text style={styles.deliveryText}>Delivering in: Cuttack / Khordha</Text>
        </View>
      </View>

      {/* Distributor Cards */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.distributorName}>Maa Durga Enterprises</Text>
          <View style={styles.verifiedTag}>
            <Ionicons name="checkmark-circle" size={14} color="#22C55E" />
            <Text style={styles.verifiedText}>Verified</Text>
          </View>
        </View>

        <Text style={styles.price}>Price: ₹120 / pack</Text>
        <Text style={styles.details}>MOQ: Min 10 packs</Text>
        <Text style={styles.details}>Delivers to: Rampur Block</Text>

        <TouchableOpacity
          style={styles.callButton}
          onPress={() => handleCall('Maa Durga Enterprises')}>
          <Ionicons name="call-outline" size={18} color="#fff" />
          <Text style={styles.buttonText}>Call distributor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.whatsappButton}
          onPress={() => handleWhatsApp('Maa Durga Enterprises')}>
          <Ionicons name="logo-whatsapp" size={18} color="#0F766E" />
          <Text style={styles.whatsappText}>WhatsApp distributor</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          We’ll note your request for the distributor.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.distributorName}>Sakhi Self Help Group</Text>
        <Text style={styles.price}>Price: ₹125 / pack</Text>
        <Text style={styles.details}>MOQ: Min 5 packs</Text>
        <Text style={styles.details}>Delivers to: —</Text>

        <TouchableOpacity
          style={styles.callButton}
          onPress={() => handleCall('Sakhi Self Help Group')}>
          <Ionicons name="call-outline" size={18} color="#fff" />
          <Text style={styles.buttonText}>Call distributor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.whatsappButton}
          onPress={() => handleWhatsApp('Sakhi Self Help Group')}>
          <Ionicons name="logo-whatsapp" size={18} color="#0F766E" />
          <Text style={styles.whatsappText}>WhatsApp distributor</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          We’ll note your request for the distributor.
        </Text>
      </View>
    </ScrollView>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 12,
  },
  offlineBanner: {
    backgroundColor: '#FEF9C3',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  offlineText: {
    color: '#713F12',
    flex: 1,
    fontSize: 14,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  offerSubtitle: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 6,
    marginBottom: 10,
  },
  deliveryTag: {
    backgroundColor: '#F3F4F6',
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  deliveryText: {
    fontSize: 13,
    color: '#374151',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  distributorName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  verifiedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCFCE7',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    gap: 4,
  },
  verifiedText: {
    color: '#166534',
    fontSize: 12,
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginTop: 6,
  },
  details: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 2,
  },
  callButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12,
  },
  whatsappButton: {
    backgroundColor: '#ECFEFF',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  whatsappText: {
    color: '#0F766E',
    fontSize: 15,
    fontWeight: '600',
  },
  note: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 13,
    marginTop: 10,
  },
});
