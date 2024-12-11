import React from 'react';
import { StyleSheet, View, Pressable} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from '../types';
import { AppItem } from '../components/AppItem';
import { ErrorMessage } from '../components/ErrorMessage';
import { useApps } from '../hooks/useApps';
import { useFocusEffect } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
    
     
  const { selectedApps, error, openApp, clearError, loadApps } = useApps();

  useFocusEffect(
    React.useCallback(() => {
      loadApps();
    }, [loadApps])
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      

      {error && <ErrorMessage message={error} onDismiss={clearError} />}
     
     
      <View style={styles.appList}>
        {selectedApps.map(app => (
          <AppItem
            key={app.id}
            app={app}
            onPress={openApp}
          />
        ))}
      </View>
      <Pressable style={styles.menu} onPress={() => navigation.navigate('ManageApps')}>
      <Ionicons name="menu" size={30} color="white" />
      </Pressable>
      
   
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
  appList: {
    flex: 1,
    marginTop:150
  },
  menu:{
    height: 50, 
  width: 50,
  borderRadius: 25, 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'grey',
  position: 'absolute', 
  bottom: 20, 
  right: 20, 
    
  }
});