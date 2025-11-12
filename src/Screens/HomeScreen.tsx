import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../Navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next'; // ✅ Import for translations

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

const HomeScreen = ({ route }: any) => {
  const navigation = useNavigation<NavigationProp>();
  const [showAlert, setShowAlert] = useState(false);
  const { t } = useTranslation(); // ✅ Hook to get translations

  const highlights = [
    { id: 1, title: t('MenstrualCup'), image: require('../images/MenstrualCup.png') },
    { id: 2, title: t('ClothPads'), image: require('../images/liner.png') },
    { id: 3, title: t('PantyLiners'), image: require('../images/reuse.png') },
    { id: 4, title: t('PeriodUnderwear'), image: require('../images/Straterkit.png') },
  ];

  const awareness = [
    { id: 1, title: t('SafeSustainable'), image: require('../images/help group.png') },
    { id: 2, title: t('ReusableAwareness'), image: require('../images/liner.png') },
  ];

  const bestPrice = [
    { id: 1, title: t('MenstrualCup'), image: require('../images/MenstrualCup.png'), price: 150 },
    { id: 2, title: t('ClothPads'), image: require('../images/liner.png'), price: 180 },
  ];

  const viewed = [
    { id: 2, title: t('Underwear'), image: require('../images/reuse.png') },
    { id: 3, title: t('ClothPads'), image: require('../images/liner.png') },
    { id: 4, title: t('MenstrualCup'), image: require('../images/MenstrualCup.png') },
    { id: 5, title: t('PantyLiners'), image: require('../images/Straterkit.png') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
      <View style={styles.profile}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.welcomeText}>{t('WelcomeUser', { name: 'Anjali' })}</Text>
            <Text style={styles.subText}>{t('PharmacistLeader')}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setShowAlert(true)} style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={26} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>{t('ProductsHighlights')}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {highlights.map((item) => (
            <View key={item.id} style={styles.highlightCard}>
              <Image source={item.image} style={styles.highlightImage} />
              <Text style={styles.highlightTitle}>{item.title}</Text>
              <Text style={styles.highlightDesc}>{t('ProductDesc')}</Text>
              <Text style={styles.highlightPrice}>{t('ProductPrice')}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>{t('NewAwareness')}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {awareness.map(item => (
            <View key={item.id} style={styles.awarenessCard}>
              <Image source={item.image} style={styles.awarenessImage} />
              <View style={styles.awarenessTextBox}>
                <Text style={styles.awarenessTitle}>{item.title}</Text>
                <Text style={styles.awarenessDesc}>{t('AwarenessDesc')}</Text>
                <TouchableOpacity style={styles.learnMoreBtn}>
                  <Text style={styles.learnMoreText}>{t('LearnMore')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.learnContainer}>
          <Text style={styles.learnTitle}>{t('LearnHowToUse')}</Text>

          {/* Step 1 - Cup */}
          <TouchableOpacity onPress={() => navigation.navigate('MenstrualCup')}>
            <View style={styles.learnCard}>
              <Image source={require('../images/MenstrualCup.png')} style={styles.learnImage} />
              <Text style={styles.learnText}>{t('LearnStep1')}</Text>
            </View>
          </TouchableOpacity>

          {/* Step 2 - Liner */}
          <TouchableOpacity onPress={() => navigation.navigate('ReusablePads')}>
            <View style={styles.learnCard}>
              <Image source={require('../images/liner.png')} style={styles.learnImage} />
              <Text style={styles.learnText}>{t('LearnStep2')}</Text>
            </View>
          </TouchableOpacity>

          {/* Step 3 - Reuse */}
          <TouchableOpacity onPress={() => navigation.navigate('PeriodPanties')}>
            <View style={styles.learnCard}>
              <Image source={require('../images/reuse.png')} style={styles.learnImage} />
              <Text style={styles.learnText}>{t('LearnStep3')}</Text>
            </View>
          </TouchableOpacity>
        </View>



        <Text style={styles.sectionTitle}>{t('BestPrice')}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {bestPrice.map(item => (
            <View key={item.id} style={styles.bestPriceCard}>
              <Image source={item.image} style={styles.bestPriceImage} resizeMode="cover" />
              <View style={styles.bestPriceTextBox}>
                <Text style={styles.bestPriceTitle}>{item.title}</Text>
                <Text style={styles.bestPricePrice}>
                  ₹{item.price} <Text style={styles.strikePrice}>₹199</Text>
                </Text>
                <Text style={styles.bestPriceVendor}>{t('Vendor')}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>{t('YouViewed')}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {viewed.map(item => (
            <View key={item.id} style={styles.viewedCard}>
              <View style={styles.viewedImageBox}>
                <Image source={item.image} style={styles.viewedImage} />
              </View>
              <Text style={styles.viewedText}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      {/* ALERT MODAL */}
      <Modal visible={showAlert} transparent animationType="fade" onRequestClose={() => setShowAlert(false)}>
        <TouchableWithoutFeedback onPress={() => setShowAlert(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalBox}>
                <Text style={styles.modalTitle}>{t('Alerts')}</Text>

                <View style={styles.alertWarning}>
                  <Ionicons name="warning-outline" size={22} color="#ff8c00" style={styles.alertIcon} />
                  <Text style={styles.alertText}>{t('AlertLowStock')}</Text>
                </View>

                <View style={styles.alertInfo}>
                  <Ionicons name="information-circle-outline" size={22} color="#0284c7" style={styles.alertIcon} />
                  <Text style={styles.alertText}>{t('AlertNewContent')}</Text>
                </View>

                <View style={styles.alertSuccess}>
                  <Ionicons name="checkmark-circle-outline" size={22} color="#16a34a" style={styles.alertIcon} />
                  <Text style={styles.alertText}>{t('AlertRestock')}</Text>
                </View>

                <TouchableOpacity onPress={() => setShowAlert(false)} style={styles.closeBtn}>
                  <Text style={styles.closeBtnText}>{t('Close')}</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f901', marginTop: -25 },
  scrollContent: { padding: 10, },

  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: 12, backgroundColor: '#fff',
    paddingVertical: 10, paddingHorizontal: 5,
  },
  profileSection: { flexDirection: 'row', alignItems: 'center', },
  profileImage: { width: 44, height: 44, borderRadius: 22, marginRight: 10, borderWidth: 1, borderColor: '#ddd' },
  welcomeText: { fontSize: 18, fontWeight: '700', color: '#c0342e' },
  subText: { color: '#161212ff' },
  iconButton: { padding: 8 },

  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  horizontalScroll: { marginBottom: 18 },

  highlightCard: {
    width: 160, marginRight: 12, backgroundColor: '#fff', borderRadius: 16,
    padding: 10, borderWidth: 0.8, borderColor: '#eee', elevation: 1,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: 430,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 30
  },
  highlightImage: { width: 140, height: 95, borderRadius: 12, marginBottom: 8, resizeMode: 'contain' },
  highlightTitle: { fontSize: 15, fontWeight: '700', marginBottom: 2 },
  highlightDesc: { color: '#666', fontSize: 12, marginBottom: 4 },
  highlightPrice: { fontWeight: '700', fontSize: 13 },

  awarenessCard: { width: 400, height: 295, marginRight: 12, backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', elevation: 4 },
  awarenessImage: { width: '100%', height: 170 },
  awarenessTextBox: { padding: 12 },
  awarenessTitle: { fontSize: 16, fontWeight: '700', marginBottom: 6 },
  awarenessDesc: { color: '#555', marginBottom: 10 },
  learnMoreBtn: { backgroundColor: '#15803d', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 8, width: 110 },
  learnMoreText: { color: '#fff', fontWeight: '700' },

  learnContainer: { padding: 16, backgroundColor: '#f2f2f2' },
  learnTitle: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  learnCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 12,
    marginBottom: 16, height: 50,
  },
  learnImage: { width: '20%', height: 52, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, marginRight: 12 },
  learnText: { flex: 1, fontSize: 16, fontWeight: '600' },

  bestPriceCard: {
    width: 250, height: 90, marginRight: 12, backgroundColor: '#fff', borderRadius: 12,
    flexDirection: 'row', alignItems: 'center', padding: 10, elevation: 3,
  },

  bestPriceImage: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  bestPriceTextBox: { flex: 1 },
  bestPriceTitle: { fontWeight: '700', fontSize: 14 },
  bestPricePrice: { color: '#15803d', fontWeight: '700', fontSize: 17 },
  strikePrice: { color: '#13111175', textDecorationLine: 'line-through', fontSize: 15 },
  bestPriceVendor: { color: '#555', fontSize: 12, fontWeight: '700' },

  viewedCard: { width: 90, marginRight: 36, alignItems: 'center' },
  viewedImageBox: { width: 90, height: 98, borderRadius: 12, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', elevation: 2 },
  viewedImage: { width: 110, height: 98, resizeMode: 'cover' },
  viewedText: { marginTop: 8 },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.45)', justifyContent: 'center', alignItems: 'center' },
  modalBox: { width: '85%', backgroundColor: '#fff', borderRadius: 12, padding: 18 },
  modalTitle: { fontSize: 18, fontWeight: '700', color: '#c0342e', marginBottom: 10, textAlign: 'center' },
  alertWarning: { backgroundColor: '#fff4e6', padding: 12, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  alertInfo: { backgroundColor: '#e0f7ff', padding: 12, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  alertSuccess: { backgroundColor: '#ecfdf5', padding: 12, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  alertIcon: { marginRight: 8 },
  alertText: { flex: 1, fontWeight: '600' },
  closeBtn: { backgroundColor: '#ff8c00', paddingVertical: 10, borderRadius: 8, alignItems: 'center', marginTop: 4 },
  closeBtnText: { color: '#fff', fontWeight: '700' },
});