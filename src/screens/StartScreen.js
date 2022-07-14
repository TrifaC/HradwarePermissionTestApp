import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { checkNotifications, check, checkMultiple, request, requestMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions';


const StartScreen = () => {

	const [permissionResult, setPermissionResult] = useState('Not asked');

  const checkSinglePermissions = () => {
		check(PERMISSIONS.ANDROID.CAMERA)
			.then((result) => {
				switch (result) {
					case RESULTS.UNAVAILABLE:
						console.log('This feature is not available (on this device / in this context)');
						break;
					case RESULTS.DENIED:
						console.log('The permission has not been requested / is denied but requestable');
						requestSinglePermission();
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

	const checkMultiplePermissions = () => {
		
	};

	const requestSinglePermission = async () => {
		request(Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA).then((result) => {
			setPermissionResult(result)
			console.log(result)
		});
	};

	const requestMultiplePermissions = () => {

	};

	useEffect(() => {
		requestSinglePermission();
	}, []);

  return (
    <View style={styles.viewStyle}>
      <Button title='Enable Camera Permission' style={styles.buttonStyle} onPress={requestSinglePermission} />
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