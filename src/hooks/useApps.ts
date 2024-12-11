import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as IntentLauncher from 'expo-intent-launcher';
import { Platform, Linking, Alert, Button } from 'react-native';
import { App } from '../types';
import { DEFAULT_APPS, MAX_SELECTED_APPS, STORAGE_KEYS } from '../constants';

export const useApps = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [selectedApps, setSelectedApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 
  
  const loadApps = useCallback(async () => {
    try {
      setLoading(true);
      const savedAppsJson = await AsyncStorage.getItem(STORAGE_KEYS.SELECTED_APPS);
      const savedApps = savedAppsJson ? JSON.parse(savedAppsJson) : [];
      
      const initializedApps = DEFAULT_APPS.map(app => ({
        ...app,
        selected: savedApps.some((saved: App) => saved.id === app.id)
      }));

      setApps(initializedApps as App[]);
      setSelectedApps(initializedApps.filter(app => app.selected) as App[]);
    } catch (err) {
      setError('Failed to load apps');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleAppSelection = useCallback(async (app: App) => {
    try {
      const updatedApps = apps.map(a => {
        if (a.id === app.id) {
       
          const newSelected = !a.selected;
          if (newSelected && selectedApps.length >= MAX_SELECTED_APPS) {
            throw new Error(`Maximum ${MAX_SELECTED_APPS} apps can be selected`);
          }
          return { ...a, selected: newSelected };
        }
        return a;
      });

      setApps(updatedApps);
      const newSelectedApps = updatedApps.filter(a => a.selected);
      setSelectedApps(newSelectedApps);
      
      await AsyncStorage.setItem(
        STORAGE_KEYS.SELECTED_APPS,
        JSON.stringify(newSelectedApps)
      );
   
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update selection');
    }
  }, [apps, selectedApps]);

 

  const openApp = async (appType:App) => {
    let url = '';

    switch (appType.name) {
      case 'whatsapp':
        url = Platform.OS === 'android' 
          ? 'whatsapp://' 
          : 'https://wa.me/';
        break;
      
      case 'messages':
        url = Platform.OS === 'android' 
          ? 'sms:' 
          : 'messages://';
        break;
      
      case 'phone':
        url = Platform.OS === 'android' 
          ? 'tel:' 
          : 'tel://';
        break;
      
      case 'Youtube':
        url = Platform.OS === 'android' 
          ? 'vnd.youtube:' 
          : 'youtube:';
        break;
      
      case 'gallery':
        url = Platform.OS === 'android' 
          ? 'content://media/external/images/media' 
          : 'photos-ui://';
        break;
      
      case 'maps':
        url = Platform.OS === 'android' 
          ? 'geo:0,0' 
          : 'maps://';
        break;
      case 'mail':
        url = Platform.OS === 'android' 
          ? 'mailto:' 
          : 'maps://';
        break;
      
      case 'twitter':
        url = Platform.OS === 'ios' 
          ? 'linkedin://' 
          : 'content://com.miui.notes'; 
        break;
    }

    try {

      const canOpen = await Linking.canOpenURL(url);
      console.log(canOpen)
      if (canOpen) {
        await Linking.openURL(url);
      } else {
        console.log(url)
        console.log(`Cannot open ${appType} app`);
       
      }
    } catch (error) {
      console.error(`Error opening ${appType} app:`, error);
    }
  };

  useEffect(() => {
    loadApps();
  }, [loadApps]);

  return {
    apps,
    selectedApps,
    loading,
    error,
    toggleAppSelection,

    openApp,
    loadApps,
    clearError: () => setError(null),
  };
};