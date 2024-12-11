import { App } from "../types";

export const STORAGE_KEYS = {
    SELECTED_APPS: '@minimalist-phone/selected-apps',
  } as const;
  
  export const MAX_SELECTED_APPS = 6;
  
  export const DEFAULT_APPS: Array<Omit<App, 'selected'>> = [
    { id: '1', name: 'messages', packageName: 'com.android.mms' },
    { id: '2', name: 'phone', packageName: 'com.android.dialer' },
    { id: '3', name: 'mail', packageName: 'com.android.gm' },
    { id: '4', name: 'youtube', packageName: 'com.android.youtube' },
    { id: '5', name: 'gallery', packageName: 'com.android.gallery' },
    
  ];