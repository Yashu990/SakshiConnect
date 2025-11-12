import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../Navigation/types';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

const InventoryScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();

  const activities = [
    { id: 1, type: 'add', product: 'Product A', qty: '+15', status: t('inventory.delivered'), time: '10:32 AM' },
    { id: 2, type: 'remove', product: 'Product B', qty: '-2', status: t('inventory.localSale'), time: '9:55 AM' },
    { id: 3, type: 'edit', product: 'Product C', qty: '+1', status: t('inventory.manualEdit'), time: t('inventory.yesterday') },
    { id: 4, type: 'add', product: 'Product D', qty: '+50', status: t('inventory.delivered'), time: t('inventory.yesterday') },
    { id: 5, type: 'remove', product: 'Product A', qty: '-1', status: t('inventory.localSale'), time: t('inventory.twoDaysAgo') },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{t('inventory.title')}</Text>
          <Ionicons name="qr-code-outline" size={22} color="#007bff" />
        </View>

        {/* Cards */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('OdersScreen')}>
              <Ionicons name="cube-outline" size={24} color="#007bff" />
              <Text style={styles.cardTitle}>{t('inventory.orders')}</Text>
            </TouchableOpacity>
            <Text style={styles.cardSubtitle}>{t('inventory.distributorText')}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{t('inventory.pending')}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Ionicons
              name="archive-outline"
              size={24}
              color="#007bff"
              onPress={() => navigation.navigate('StockManagePage')}
            />
            <Text style={styles.cardTitle}>{t('inventory.stock')}</Text>
            <Text style={styles.cardSubtitle}>{t('inventory.autoAdded')}</Text>
            <View style={[styles.badge, { backgroundColor: '#e8f0ff' }]}>
              <Text style={[styles.badgeText, { color: '#007bff' }]}>{t('inventory.items')}</Text>
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>{t('inventory.recentActivity')}</Text>

        <View style={styles.activityList}>
          {activities.map((item) => (
            <View key={item.id} style={styles.activityItem}>
              <View
                style={[
                  styles.iconCircle,
                  item.type === 'add'
                    ? styles.greenCircle
                    : item.type === 'remove'
                    ? styles.redCircle
                    : styles.grayCircle,
                ]}
              >
                <Ionicons
                  name={
                    item.type === 'add'
                      ? 'add'
                      : item.type === 'remove'
                      ? 'remove'
                      : 'create-outline'
                  }
                  size={14}
                  color={item.type === 'edit' ? '#555' : '#000'}
                />
              </View>

              <View style={styles.activityDetails}>
                <Text style={styles.activityTitle}>
                  {item.qty} {item.product}
                </Text>
                <Text style={styles.activitySub}>
                  {item.status} • {item.time}
                </Text>
              </View>

              <TouchableOpacity>
                <Text style={styles.viewBtn}>{t('inventory.view')}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: { fontSize: 22, fontWeight: '700', color: '#111' },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  card: {
    flex: 0.48,
    backgroundColor: '#f8f9fb',
    borderRadius: 14,
    padding: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 6,
    color: '#111',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#007bff20',
    alignSelf: 'flex-start',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: { fontSize: 12, color: '#007bff', fontWeight: '500' },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginBottom: 10,
  },
  activityList: { marginBottom: 40 },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fb',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  greenCircle: { backgroundColor: '#d4f8e8' },
  redCircle: { backgroundColor: '#fde8e8' },
  grayCircle: { backgroundColor: '#f1f1f1' },
  activityDetails: { flex: 1 },
  activityTitle: { fontSize: 14, fontWeight: '600', color: '#111' },
  activitySub: { fontSize: 12, color: '#666' },
  viewBtn: {
    color: '#007bff',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default InventoryScreen;
