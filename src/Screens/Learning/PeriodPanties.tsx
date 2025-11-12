import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const PeriodPanties = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <ImageBackground
      // source={require('../../images/background.png')} // background image
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color="#0F172A" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('periodPanties.title', 'Period Panties Usage')}</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>
          {t('periodPanties.description', 'Learn how to use, clean, and store period panties effectively.')}
        </Text>

        {/* How to Use */}
        <View style={styles.stepCard}>
          <View style={styles.stepTextContainer}>
            <Text style={styles.stepTitle}>{t('periodPanties.useTitle', 'How to Use')}</Text>
            <Text style={styles.stepDescription}>
              <Text style={{ fontWeight: '600' }}>{t('periodPanties.useProduct', 'Period panties')}</Text> {t('periodPanties.useDescription', 'look like normal underwear but have built-in absorbent and leak-proof layers.')}
            </Text>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>1.</Text>
              <Text style={styles.listText}>{t('periodPanties.useStep1', 'Choose a size that fits snugly for leak protection.')}</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>2.</Text>
              <Text style={styles.listText}>{t('periodPanties.useStep2', 'Wear them directly — no extra pad or tampon is needed (unless your flow is very heavy).')}</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>3.</Text>
              <Text style={styles.listText}>{t('periodPanties.useStep3', 'Depending on your flow, wear for 8–12 hours or change when feeling damp.')}</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>4.</Text>
              <Text style={styles.listText}>{t('periodPanties.useStep4', 'Keep spare panties in a pouch for changing if needed.')}</Text>
            </View>
          </View>
        </View>

        {/* How to Clean */}
        <View style={styles.stepCard}>
          <View style={styles.stepTextContainer}>
            <Text style={styles.stepTitle}>{t('periodPanties.cleanTitle', 'How to Clean')}</Text>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>1.</Text>
              <Text style={styles.listText}>{t('periodPanties.cleanStep1', 'Rinse in cold water immediately after wearing until the water runs clear.')}</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>2.</Text>
              <Text style={styles.listText}>{t('periodPanties.cleanStep2', 'Hand wash or machine wash on gentle cycle using mild detergent.')}</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>3.</Text>
              <Text style={styles.listText}>{t('periodPanties.cleanStep3', 'Avoid bleach, hot water, or fabric softener — they damage the waterproof layer.')}</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>4.</Text>
              <Text style={styles.listText}>{t('periodPanties.cleanStep4', 'Air dry in shade — avoid sunlight or dryers as heat weakens the elastic and waterproof fabric.')}</Text>
            </View>
          </View>
        </View>

        {/* How to Store */}
        <View style={styles.stepCard}>
          <View style={styles.stepTextContainer}>
            <Text style={styles.stepTitle}>{t('periodPanties.storeTitle', 'How to Store')}</Text>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{t('periodPanties.storeStep1', 'Fold and store completely dry in a clean drawer or breathable bag.')}</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{t('periodPanties.storeStep2', 'Never store damp panties; moisture causes odor and bacterial growth.')}</Text>
            </View>
          </View>
        </View>

        {/* General Hygiene */}
        <View style={styles.stepCard}>
          <View style={styles.stepTextContainer}>
            <Text style={styles.stepTitle}>{t('periodPanties.hygieneTitle', 'General Hygiene Tips (for All Products)')}</Text>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{t('periodPanties.hygieneStep1', 'Always wash your hands before and after handling menstrual products.')}</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{t('periodPanties.hygieneStep2', 'Replace reusable items every 2–5 years, depending on use and condition.')}</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{t('periodPanties.hygieneStep3', 'Inspect regularly for tears, discoloration, or odor — replace if noticed.')}</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{t('periodPanties.hygieneStep4', 'If irritation or infection occurs, stop using and consult a gynecologist.')}</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { padding: 20, paddingBottom: 120 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#0F172A', marginLeft: 8 },
  description: { color: '#475569', fontSize: 13, marginBottom: 18, lineHeight: 20, textAlign: 'justify' },
  stepCard: { backgroundColor: '#fff', borderRadius: 16, padding: 18, marginVertical: 10, elevation: 3 },
  stepTextContainer: { width: '100%' },
  stepTitle: { fontSize: 18, fontWeight: '700', color: '#0284C7', marginBottom: 8 },
  stepDescription: { fontSize: 15, color: '#0F172A', lineHeight: 24, textAlign: 'justify' },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 6, paddingLeft: 10 },
  bullet: { fontSize: 16, lineHeight: 22, marginRight: 6 },
  listText: { flex: 1, fontSize: 15, lineHeight: 22, color: '#334155' },
});

export default PeriodPanties;
