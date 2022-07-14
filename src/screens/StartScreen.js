import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { checkNotifications, check, checkMultiple, request, requestMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions';


const StartScreen = () => {

	const [permissionResult, setPermissionResult] = useState('Not asked');

  const checkSinglePermissions = ({ permissionName: permission }) => {
		check(permission)
			.then((result) => {
				switch (result) {
					case RESULTS.UNAVAILABLE:
						console.log('This feature is not available (on this device / in this context)');
						break;
					case RESULTS.DENIED:
						console.log('The permission has not been requested / is denied but requestable');
						requestSinglePermission(permission);
						break;
					case RESULTS.LIMITED:
						console.log('The permission is limited: some actions are possible');
						break;
					case RESULTS.GRANTED:
						console.log('The permission is granted');
						break;
					case RESULTS.BLOCKED:
						console.log('The permission is denied and not requestable anymore');
						break;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const requestSinglePermission = async ({ permissionName: permission }) => {
		request(permission).then((result) => {
			setPermissionResult(result)
			console.log(result)
		});
	};

  return (
		<View>
			<View style={styles.viewStyle}>
				<Button 
					title='Enable Camera Permission'
					style={styles.buttonStyle}
					onPress={() => checkSinglePermissions({ permissionName: PERMISSIONS.ANDROID.CAMERA })}
				/>
			</View>
			<View style={styles.viewStyle}>
				<Button
					title='Enable Audio Permission' 
					style={styles.buttonStyle} 
					onPress={() => checkSinglePermissions({ permissionName: PERMISSIONS.ANDROID.RECORD_AUDIO })} 
				/>
			</View>
			<View style={styles.viewStyle}>
				<Button 
					title='Enable Storage Permission' 
					style={styles.buttonStyle} 
					onPress={() => checkSinglePermissions({ permissionName: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE })}
				/>
			</View>
			<View style={styles.viewStyle}>
				<Button 
					title='Enable Bluetooth Scan Permission' 
					style={styles.buttonStyle} 
					onPress={() => checkSinglePermissions({ permissionName: PERMISSIONS.ANDROID.BLUETOOTH_SCAN })}
				/>
			</View>
		</View>
  );
};

const styles = StyleSheet.create({
	viewStyle: {
    padding: 16
	},
  buttonStyle: {
		backgroundColor: 'red',
	}
});

export default StartScreen;