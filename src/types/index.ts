export interface App {
    id: string;
    name: string;
    packageName: string;
    selected: boolean;
  }
  
  export type RootStackParamList = {
    Home: undefined;
    ManageApps: undefined;
  };
  
  export interface StorageKeys {
    SELECTED_APPS: string;
  }