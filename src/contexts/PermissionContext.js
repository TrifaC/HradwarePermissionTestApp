import createDataContext from './createDataContext';
import { checkNotifications, check, checkMultiple, request, requestMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions';


const PERMISSION_LIST = [
  { title: "Enable Camera Permission", permissionContent: PERMISSIONS.ANDROID.CAMERA, isGranted: false },
  { title: "Enable Record Audio Permission", permissionContent: PERMISSIONS.ANDROID.RECORD_AUDIO, isGranted: false },
  { title: "Enable Write External Storage Permission", permissionContent: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, isGranted: false },
  { title: "Enable Read External Storage Permission", permissionContent: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE, isGranted: false },
  { title: "Enable Access Find Location Permission", permissionContent: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, isGranted: false },
  { title: "Enable Access Coarse Location Permission", permissionContent: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION, isGranted: false },
  { title: "Enable Bluetooth scan Permission", permissionContent: PERMISSIONS.ANDROID.BLUETOOTH_SCAN, isGranted: false },
  { title: "Enable Bluetooth connect Permission", permissionContent: PERMISSIONS.ANDROID.BLUETOOTH_CONNECT, isGranted: false },
  { title: "Enable Bluetooth advertise Permission", permissionContent: PERMISSIONS.ANDROID.BLUETOOTH_ADVERTISE, isGranted: false },
];

const permissionReducer = (state, action) => {
  switch (action.type) {
    case 'get_require_permissions':
      return state;
    case 'update_require_permissions_state':
      return ( 
        state.map((permission) => {
          return permission.permissionContent === action.payload.permissionContent ? {...permission, isGranted: action.payload.isGranted} : permission;
        })
      );
    default:
      return state;
  }
};

const getRequirePermissions = dispatch => {
  return () => {
    dispatch({type: 'get_require_permissions'})
  };
}
const updateRequirePermissionsState = dispatch => {
  return ({permissionContent, isGranted}) => {
    dispatch(
      { type: 'update_require_permissions_state', payload: {permissionContent: permissionContent, isGranted: isGranted} }
    )
  };
}

export const { Context, Provider } = createDataContext(
  permissionReducer,
  { getRequirePermissions, updateRequirePermissionsState },
  PERMISSION_LIST
);