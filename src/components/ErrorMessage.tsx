import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

interface ErrorMessageProps {
  message: string;
  onDismiss: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onDismiss }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message}</Text>
    <Pressable onPress={onDismiss}>
      <Text style={styles.dismissText}>Dismiss</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff5252',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    flex: 1,
    marginRight: 8,
  },
  dismissText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});