import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../Navigation/types';
import { useTranslation } from 'react-i18next'; // 👈 Add this

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

const LearningScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation(); // 👈 Initialize translator

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>{t('learningTitle')}</Text>
        <Text style={styles.subHeading}>{t('learningSubtitle')}</Text>

        <View style={styles.grid}>
          {/* Card 1 */}
          <TouchableOpacity onPress={() => navigation.navigate('MenstrualCup')} style={styles.card}>
            <View style={styles.iconContainer}>
              <Image source={require('../images/cup.png')} style={styles.icon} />
            </View>
            <Text style={styles.title}>{t('menstrualCup')}</Text>
            <Text style={styles.details}>{t('learningDetails')}</Text>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity onPress={() => navigation.navigate('ReusablePads')} style={styles.card}>
            <View style={styles.iconContainer}>
              <Image source={require('../images/pad.png')} style={styles.icon} />
            </View>
            <Text style={styles.title}>{t('reusablePads')}</Text>
            <Text style={styles.details}>{t('learningDetails')}</Text>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity onPress={() => navigation.navigate('PeriodPanties')} style={styles.card}>
            <View style={styles.iconContainer}>
              <Image source={require('../images/liner.png')} style={styles.icon} />
            </View>
            <Text style={styles.title}>{t('periodPanties')}</Text>
            <Text style={styles.details}>{t('learningDetails')}</Text>
          </TouchableOpacity>

          {/* Card 4 */}
          <TouchableOpacity onPress={() => navigation.navigate('StarterKit')} style={styles.card}>
            <View style={styles.iconContainer}>
              <Image source={require('../images/reuse.png')} style={styles.icon} />
            </View>
            <Text style={styles.title}>{t('starterKit')}</Text>
            <Text style={styles.details}>{t('learningDetails')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  subHeading: {
    fontSize: 18,
    color: '#64748B',
    marginBottom: 20,
    lineHeight: 22,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: '47%',
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  iconContainer: {
    backgroundColor: '#CCFBEF',
    alignSelf: 'flex-start',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  details: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
});

export default LearningScreen;
