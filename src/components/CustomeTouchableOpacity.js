import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomeTouchableOpacity = ({ title, onPress }) => {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity onPress={onPress}>
        <Text>{ title }</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 16,
  },
});

export default CustomeTouchableOpacity;