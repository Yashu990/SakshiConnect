import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { setLanguage, language } = useLanguage() as any;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, language === 'en' && styles.active]}
        onPress={() => setLanguage('en')}>
        <Text style={styles.text}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, language === 'hi' && styles.active]}
        onPress={() => setLanguage('hi')}>
        <Text style={styles.text}>हिन्दी</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
  button: {
    backgroundColor: '#eee',
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  active: {
    backgroundColor: '#2563EB',
  },
  text: { color: '#000', fontWeight: '600' },
});

export default LanguageSelector;
