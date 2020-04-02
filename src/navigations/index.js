import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ViewContacts from '../screens/ViewContacts'
import Dashbord from '../contaner/Dashboard'
import EditContacts from '../screens/EditContacts'


const StackNavigator = createStackNavigator({
    Dashbord:{
        screen:Dashbord
    },
    ViewContacts:{
        screen:ViewContacts
    },
    EditContacts:{
         screen:EditContacts
    },
    },
    {
     initialRouteName: 'Dashbord',
     headerMode:"node",
     mode:"modal"
    }
)

export default createAppContainer(StackNavigator);