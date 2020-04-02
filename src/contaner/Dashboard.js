import React,{useState,useEffect} from 'react'
import {StyleSheet,View, FlatList, PermissionsAndroid  } from "react-native";
import {Text,FAB} from 'react-native-paper'
import Header from '../component/Header'
import Contacts from 'react-native-contacts';
import {PermissionAccess,getAllContacts} from '../config/config'

export default function Dashboard({ navigation }) {

   const [permissionaddes, setpermissionaddes] = useState(false);
 const [contactsList,setContactList] = useState([]) 
   
    useEffect( ()  =>{
      async function fetchData() {
        console.log("Permision AccesCall Here")
        const access = await PermissionAccess()
          console.log("ACCESS ==>",access)
               setpermissionaddes(access)  
      }
      fetchData();
     
    },[])
   
  async function getList(){
    console.log("Access Contacts List ")
    Contacts.getAll((err, contacts) => {
      if (err) {
        setContactList(err)
      } else {
          if(contacts)
          setContactList(contacts) // this returns: []
      }
    })
     return contactsList
   }
    return(
        <>
        <Header titleText="Dashboard"/>
        <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title} onPress={() => personalbarContact()}>Hello Contact List are here</Text>
        </View>
        <FAB
        style={styles.fab}
        small
        icon='plus'
        label='View Contacts List'
        onPress={async ()  =>{
         const getContacts = await getList()
          console.log("get Data",getContacts)
          if(getContacts.length > 0){
            navigation.navigate('ViewContacts',{contactslists:getContacts,itemId:"Data"})
          }
            
        } }//
      />
       </View>
       </>
    )

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20
      },
      titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      },
      title: {
        fontSize: 20
      },
      fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
      }
})



