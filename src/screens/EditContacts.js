import React,{useState,useEffect} from 'react'
import{StyleSheet,View} from 'react-native'
import EditContactsComponents from '../component/EditContactsComponents'
import Header from '../component/Header'

function EditContacts({navigation}){
    const { params } = navigation.state;
    const editDetails = params ? params.editDetails : null;
    const [userEditDetails,setuserEditDetails] = useState(editDetails)

    useEffect(()=>{
        setuserEditDetails(userEditDetails)
        console.log(" user Details===>",userEditDetails)
    })
return(
    <>
    <Header titleText="Edit Contacts" backimage={true}/>
    <View>
   <EditContactsComponents title={userEditDetails}/>
    </View>


    </>
)
}

export default EditContacts;