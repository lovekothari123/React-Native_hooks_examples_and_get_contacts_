import React,{useState,useEffect} from 'react'
import {StyleSheet,View,FlatList, PermissionsAndroid,Image} from 'react-native'
import {Text,TouchableRipple} from 'react-native-paper'
import Header from '../component/Header'
import Contacts from 'react-native-contacts';
import UserAvatar from 'react-native-user-avatar';



function ViewContacts({navigation}){
  const { params } = navigation.state;
    const itemId = params ? params.itemId : null;
    const contactslists = params ? params.contactslists : null
    const [constacts,setcontacts] = useState([])
  
  useEffect(()=>{
   
    console.log("Constact List", contactslists)
        setcontacts(contactslists)      
  })
  
    return(
      <>
      <Header titleText="List of Contact" backimage={true}/>
      <View style={styles.container}>
     {contactslists != null ? 
      <FlatList
          data={constacts}
          renderItem={({ item }) => (
            <View  style={styles.flatlist_style} >
              <TouchableRipple
               onPress={() => {
                navigation.navigate('EditContacts',{editDetails:item})
               }}
               rippleColor="rgba(0, 0, 0, .32)">
              <View style={styles.contactthumnill}>
              {item.hasThumbnail == true ?
                <Image
            style={[styles.image]}
            source={{ uri: item.thumbnailPath }}
            defaultSource={require('../assests/facebook.png')}
            width={40}
            height={40}
        /> :
        <UserAvatar size="40" name={item.givenName} colors={['#000', '#581845', '#C70039']}/>
               }
               <View style={styles.spraterline}>
              <Text style={styles.contact_details}>
                {`${item.givenName+" "+item.familyName} `}
              </Text>
              </View>
              </View>
              </TouchableRipple>
            </View>
          )}
          //Setting the number of column
          numColumns={1}
          // keyExtractor={(item, index) => index}
        />
        : <Text>Loading...</Text>}

    </View>
    </>)
}

const styles = StyleSheet.create({
      titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        
      },
      title: {
        fontSize: 20
      },
      flatlist_style:{
     marginLeft:10,
     marginRight:10
      },
      container: {
         flex: 1,
        justifyContent: 'center',
        // alignItems: "flex-start",
        backgroundColor: '#A9A9A9',
        marginTop:30,
      },
      
      contact_details: {
        textAlign: "left",
        color: '#000',
        margin: 10,
        marginTop:20,
        fontWeight:"bold",
        
      },
      spraterline:{
        flex:1,
        borderBottomColor:"#000",
        borderBottomWidth:1,
        
      },
      contactthumnill:{
        flexDirection:'row',
        display:'flex',
        alignItems: 'center',
        // justifyContent: 'center',
      }
})
export default ViewContacts;