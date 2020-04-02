import React,{useState,useEffect} from 'react'
import {StyleSheet,View} from 'react-native'
import {Text} from 'react-native-paper'
import UserAvatar from 'react-native-user-avatar';

export default function EditContactsComponents({title}){
    const phones = [
        {label:"mobilw",number:"99797979797"},{label:"sdsd",number:"56634545"},{label:"sdsd",number:"99797979797"},
        {label:"sdsd",number:"56634545"}
    ]
    const [userPhone,setUserPhone] = useState(phones)
    useEffect(()=>{

        console.log("Get Contacts ")

       
    })
    return(
        <>
        <View style={styles.thamnail_image}>
        <UserAvatar  size="100" name={title.givenName} colors={['#000', '#581845', '#C70039']}/>
        </View>
        <View style={styles.contaner}>
         
         <View style={styles.user_name}>
         <Text style={styles.user_display_name_text}>Name: {title.givenName}</Text>    
         <Text style={styles.user_familyName_name_text}>FamilyName: {title.familyName}</Text>
          
          <View style={styles.contacts_lists}>
               {title && title.phoneNumbers.map(phone => (
                <Text style={styles.phones}>Phone: {phone.label} : {phone.number}</Text>
              ))}
              <Text style={styles.phones}>Department: {title.department}</Text>
              <Text style={styles.phones}>JobTitle: {title.jobTitle}</Text>
              <Text style={styles.phones}>GivenName: {title.givenName}</Text>
          </View>
         </View>
        </View>
    </>)
}

const styles = StyleSheet.create({
    contaner:{
      marginTop:-20,
      backgroundColor:'#ef8e38',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      height:'100%'
    },
    contacts_lists:{
      marginLeft:15,
      marginTop:15,
      borderBottomColor:"#000",
       borderBottomWidth:1    },
    phones: {
        fontSize: 20,
        marginTop:15,
        borderBottomColor:"#000",
       borderBottomWidth:0.5
      },
    user_name:{
     marginTop:20,
    },
    user_display_name_text:{
        fontWeight:'bold',
        fontSize:25,
        marginLeft:10,
        borderBottomColor:"#000",
       borderBottomWidth:.5
    },
    user_familyName_name_text:{
        marginTop:5,
       fontWeight:'bold',
       fontSize:20,
       marginLeft:10,
       borderBottomColor:"#000",
       borderBottomWidth:2
    },
    thamnail_image:{
         marginTop:20,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        alignSelf:'auto',
        zIndex:1
    }
})