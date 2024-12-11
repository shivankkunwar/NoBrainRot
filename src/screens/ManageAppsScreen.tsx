import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from '../types';
import { AppItem } from '../components/AppItem';
import { ErrorMessage } from '../components/ErrorMessage';
import { useApps } from '../hooks/useApps';

type Props = NativeStackScreenProps<RootStackParamList, 'ManageApps'>;

export const ManageAppsScreen: React.FC<Props> = () => {
  const { apps, error, toggleAppSelection, clearError } = useApps();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <Text style={styles.title}>Manage Apps</Text>

      {error && <ErrorMessage message={error} onDismiss={clearError} />}

      <ScrollView style={styles.scrollView}>
        {apps.map(app => (
          <AppItem
            key={app.id}
            app={app}
            onPress={toggleAppSelection}
            selected={app.selected}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 24,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
});