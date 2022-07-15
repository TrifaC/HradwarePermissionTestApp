import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { checkNotifications, check, checkMultiple, request, requestMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions';


const MultiplePermissionRequestScreen = () => {
  return (
		<View>
			<Text>Multiple Permission Screen.</Text>
		</View>
  );
};

const styles = StyleSheet.create({ });

export default MultiplePermissionRequestScreen;