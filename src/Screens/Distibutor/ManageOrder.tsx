import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../Navigation/types';
import AddProductModal from '../../components/Modals/AddProductModal';
import SetQuantityModal from '../../components/Modals/SetQuantityModal';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

interface Product {
  id: number;
  product_name: string;
  description: string;
  unit_price: number;
  quantity: number;
}

const ManageOrder = () => {
  const navigation = useNavigation<NavigationProp>();
  const [showOffers, setShowOffers] = useState<{ [key: number]: boolean }>({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isQtyModalVisible, setIsQtyModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ id: number; name: string } | null>(null);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://192.168.1.9:5000/api/distributor/2/inventory');
      const data = await response.json();
      console.log('Fetched products:', data);
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to fetch products. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Inventory</Text>

        <TouchableOpacity onPress={() => {
          setIsModalVisible(true);
          navigation.navigate('CreateOrderPage');
        }}>
          <Text style={{ color: '#2563EB', fontSize: 16, marginRight: 8 }}>
            Add Product
          </Text>
        </TouchableOpacity>
        <Ionicons name="qr-code-outline" size={22} color="#000" />
      </View>

      {/* Offline notice */}
      <View style={styles.offlineCard}>
        <Ionicons name="wifi-outline" size={20} color="#FF8C00" />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.offlineText}>Offline</Text>
          <Text style={styles.offlineSub}>
            Changes will sync when you’re back online.
          </Text>
        </View>
        <TouchableOpacity style={styles.dismissButton}>
          <Text style={styles.dismissText}>Dismiss</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.infoText}>
        Items shown in ‘Offers’ only if visible and in stock.
      </Text>

      {/* Loading / Error */}
      {loading ? (
        <ActivityIndicator size="large" color="#2563EB" style={{ marginTop: 30 }} />
      ) : error ? (
        <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>
      ) : (
        products.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.productName}>{item.product_name}</Text>
              <View
                style={[
                  styles.stockTag,
                  { backgroundColor: '#D1FADF' },
                ]}>
                <Text style={styles.stockText}>In Stock</Text>
              </View>
            </View>
            {/* <Text style={styles.sku}>{item.description}</Text> */}
            <Text style={styles.details}>Price ₹{item.unit_price}/unit</Text>
            <Text style={styles.details}>{item.quantity} unit</Text>


            <View style={styles.qtyRow}>
              <TouchableOpacity style={styles.qtyButton}>
                <Text style={styles.qtyButtonText}>–</Text>
              </TouchableOpacity>
              <Text style={styles.qtyValue}>1</Text>
              <TouchableOpacity style={styles.qtyButton}>
                <Text style={styles.qtyButtonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setSelectedProduct({ id: item.id, name: item.product_name });
                setIsQtyModalVisible(true);
              }}>
                <Text style={styles.editQty}>Edit qty</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>Show in offers</Text>
              <Switch
                value={showOffers[item.id] || false}
                onValueChange={(value) =>
                  setShowOffers((prev) => ({ ...prev, [item.id]: value }))
                }
              />
            </View>
          </View>
        ))
      )}

      {/* Add Product Modal */}
      <AddProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
      <SetQuantityModal
        visible={isQtyModalVisible}
        onClose={() => setIsQtyModalVisible(false)}
        productId={selectedProduct?.id || null}
        productName={selectedProduct?.name || ''}
        distributorId={1} // static for now
      />
    </ScrollView>
  );
};

export default ManageOrder;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: { fontSize: 22, fontWeight: '600', color: '#111827' },
  offlineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5E6',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  offlineText: { fontWeight: '600', color: '#111' },
  offlineSub: { fontSize: 12, color: '#555' },
  dismissButton: {
    marginLeft: 'auto',
    backgroundColor: '#E5E7EB',
    padding: 6,
    borderRadius: 6,
  },
  dismissText: { fontSize: 12, color: '#000' },
  infoText: { color: '#6B7280', marginVertical: 8, fontSize: 13 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: { fontSize: 16, fontWeight: '600', color: '#111' },
  stockTag: { borderRadius: 12, paddingHorizontal: 8, paddingVertical: 2 },
  stockText: { fontSize: 12, fontWeight: '500' },
  sku: { color: '#6B7280', fontSize: 12, marginTop: 4 },
  details: { color: '#6B7280', fontSize: 12, marginTop: 2 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  qtyButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  qtyButtonText: { fontSize: 16, fontWeight: '600' },
  qtyValue: { fontSize: 16, marginHorizontal: 8, fontWeight: '600' },
  editQty: { marginLeft: 'auto', color: '#2563EB', fontSize: 13 },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  toggleLabel: { color: '#111827', fontSize: 13 },
});
