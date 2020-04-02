import {StyleSheet,View, FlatList, PermissionsAndroid  } from "react-native";
import Contacts from 'react-native-contacts';

export async function PermissionAccess(){
    console.log("Get permission request here")
try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'App Premission',
        'message': 'This app would like to view your contacts.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can read contacts")
     
      return true
    } else {
      console.log("read contacts permission denied")
      return false
    }
  } catch (err) {
    console.warn(err)
  }
}


export function getAllContacts(){
    
 let data =  Contacts.getAll((err, contacts) => {
    if (err === 'denied'){
      // error
      return err
    } else {
      // contacts returned in Array
     return contacts
    }
  })
  console.log("Data::",data)
      
}
