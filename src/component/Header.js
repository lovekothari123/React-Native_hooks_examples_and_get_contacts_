import React from 'react'
import {StyleSheet,View,Image} from 'react-native'
import {Appbar,Title,TouchableRipple} from 'react-native-paper'

export default function Header({navigation,titleText,backimage}) {
  
 return(
     <Appbar.Header style={styles.headerContainer}>
        <View>
          {backimage == true ? 
          <TouchableRipple onPress={()=>  console.log("goBack()")}>
        <Image   
            style={styles.imagesHight}         
            source={require('../assests/return.png')}
            defaultSource={require('../assests/return.png')}
                    
        />
        </TouchableRipple>: null}
        </View>
        <View style={styles.container}>
        <Title style={styles.title}>{titleText}</Title>
      </View>
     </Appbar.Header>
 )

}
  
const styles = StyleSheet.create({
headerContainer: {
    backgroundColor: '#60DBC5'
  },
  imagesHight:{
    width:30,
    height:30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#2E7166'
  }
})