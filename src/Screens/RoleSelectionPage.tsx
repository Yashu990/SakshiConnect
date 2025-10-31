import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../Navigation/types';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // ensure same instance used everywhere

type RoleSelectionNav = NativeStackNavigationProp<MainStackParamList, 'RoleSelectionPage'>;

const RoleSelectionPage = () => {
  const navigation = useNavigation<RoleSelectionNav>();
  const { t } = useTranslation();

  useEffect(() => {
    console.log('RoleSelectionPage mounted, current lang =', i18n.language);
  }, []);

  return (
    <ImageBackground
      source={require('../images/backimg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}></Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007bff' }]}
          onPress={() => navigation.navigate('UserRegisterPage')}
        >
          <Text style={styles.buttonText}>{t('RegisterUser')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#28a745' }]}
          onPress={() => navigation.navigate('AdminRegisterPage')}
        >
          <Text style={styles.buttonText}>{t('RegisterAdmin')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff9800' }]}
          onPress={() => navigation.navigate('DistributorRegisterPage')}
        >
          <Text style={styles.buttonText}>{t('RegisterDistributor')}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RoleSelectionPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 40,
    color: '#000',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
