import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { checkNotifications, check, checkMultiple, request, requestMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions';

import CustomeTouchableOpacity from '../components/CustomeTouchableOpacity';

import { Context as PermissionContext } from '../contexts/PermissionContext';

const PermissionListScreen = () => {

	const { state, getRequirePermissions, updateRequirePermissionsState } = useContext(PermissionContext);

  const checkSinglePermissions = ({ permissionContent: content }) => {
		check(content)
			.then((result) => {
				switch (result) {
					case RESULTS.UNAVAILABLE:
						console.log('This feature is not available (on this device / in this context)');
						break;
					case RESULTS.DENIED:
						console.log('The permission has not been requested / is denied but requestable');
						requestSinglePermission({ permissionContent: content });
						break;
					case RESULTS.LIMITED:
						console.log('The permission is limited: some actions are possible');
						break;
					case RESULTS.GRANTED:
						console.log('The permission is granted');
            updateRequirePermissionsState({ permissionContent: content, isGranted: true });
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

	const requestSinglePermission = async ({ permissionContent: content }) => {
		request(content).then((result) => {
      if (result === "blocked") {
        console.log(`Too many time denied, the permission is ${result}. Go to setting and open by yourself.`);
      } else { 
        updateRequirePermissionsState({ permissionContent: content.PermissionContent, isGranted: true });
      }
		});
	};

  return (
		<View>
      <Button title='Get permission information' onPress={() => {console.log(state)}}/>
      <FlatList
        data={state}
        keyExtractor={item => item.title}
        renderItem={({ item }) => {
          return (
            <CustomeTouchableOpacity
              title={item.title}
              onPress={() => {checkSinglePermissions({ permissionContent: item.permissionContent})}}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
	viewStyle: {
    padding: 16
	},
});

export default PermissionListScreen;