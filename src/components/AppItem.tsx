import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { App } from "../types";


interface AppItemProps {
  app: App;
  onPress: (app: App) => void;
  selected?: boolean;
}

export const AppItem: React.FC<AppItemProps> = ({ app, onPress, selected }) => {
 
  return (<Pressable
    style={[styles.container, selected && styles.selected]}
    onPress={() => onPress(app)}
  >
    <Text style={styles.text}>{app.name}</Text>
    {selected && <Text style={styles.checkmark}>✓</Text>}
  </Pressable>)
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#3a3a3a",
  },
  text: {
    color: "#ffffff",
    fontSize: 30,
  },
  checkmark: {
    color: "#4CAF50",
    fontSize: 18,
  },
});
