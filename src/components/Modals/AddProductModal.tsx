// components/AddProductModal.tsx
import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';

interface AddProductModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ visible, onClose }) => {
  const [name, setName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!name.trim() || !unitPrice.trim()) {
      Alert.alert('Validation Error', 'Please fill all required fields.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('http://192.168.1.30:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
          unit_price: parseFloat(unitPrice),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Product created:', data);

      Alert.alert('Success', 'Product created successfully!');
      setName('');
      setUnitPrice('');
      setDescription('');
      onClose();
    } catch (error: any) {
      console.error('❌ Error creating product:', error);
      Alert.alert('Error', 'Failed to create product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Create New Product</Text>

          <TextInput
            style={styles.input}
            placeholder="Product Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Unit Price"
            keyboardType="numeric"
            value={unitPrice}
            onChangeText={setUnitPrice}
          />

          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose} disabled={loading}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.saveText}>Save</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddProductModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '85%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  saveBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#2563EB',
    minWidth: 90,
    alignItems: 'center',
  },
  cancelText: { color: '#333', fontWeight: '600' },
  saveText: { color: '#fff', fontWeight: '600' },
});
