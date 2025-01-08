import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Phần tiêu đề */}
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>

      {/* Phần nội dung */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: phoneNumber ? '#007AFF' : '#E0E0E0' }, // Kích hoạt nút khi có số
          ]}
          disabled={!phoneNumber}
          onPress={() => alert(`Số điện thoại của bạn là: ${phoneNumber}`)}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
      height: 80, // Giảm chiều cao của header
      justifyContent: 'center',
      alignItems: 'flex-start', // Căn trái
      paddingHorizontal: 20,   // Khoảng cách từ cạnh trái
      paddingTop: 10,          // Khoảng cách từ trên cùng
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor: '#f9f9f9',
    },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
