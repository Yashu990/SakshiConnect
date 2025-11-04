import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../Navigation/types';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;
const LearningScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Learning</Text>
        <Text style={styles.subHeading}>
          Pick a product → see all instructions on one page.
        </Text>

        <View style={styles.grid}>
          {/* Card 1 */}
          <TouchableOpacity onPress={()=>navigation.navigate('MenstrualCup')} style={styles.card}>
            <View style={styles.iconContainer}>
              <Image source={require('../images/cup.png')} style={styles.icon} />
            </View>
            <Text style={styles.title}>Menstrual Cup</Text>
            <Text style={styles.details}>Text • Images • Audio • YouTube</Text>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity onPress={()=>navigation.navigate('ReusablePads')} style={styles.card}>
            <View style={styles.iconContainer}>
              <Image source={require('../images/pad.png')} style={styles.icon} />
            </View>
            <Text style={styles.title}>Reusable Pads</Text>
            <Text style={styles.details}>Text • Images • Audio • YouTube</Text>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity onPress={()=>navigation.navigate("PeriodPanties")} style={styles.card}>
            <View style={styles.iconContainer}>
              <Image source={require('../images/liner.png')} style={styles.icon} />
            </View>
            <Text style={styles.title}>Period Panties</Text>
            <Text style={styles.details}>Text • Images • Audio • YouTube</Text>
          </TouchableOpacity>

          {/* Card 4 */}
          <TouchableOpacity onPress={()=>navigation.navigate("StarterKit")} style={styles.card}>
            <View style={styles.iconContainer}>
              <Image source={require('../images/reuse.png')} style={styles.icon} />
            </View>
            <Text style={styles.title}>Starter Kit</Text>
            <Text style={styles.details}>Text • Images • Audio • YouTube</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ✅ Fixed Footer at bottom */}
      {/* <Footer /> */}
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
    paddingBottom: 100, // add space so footer doesn’t overlap scroll content
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
