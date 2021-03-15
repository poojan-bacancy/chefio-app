import React , {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import NotificationScreen from '../screens/chef/NotificationScreen';
import MyProfileScreen from '../screens/chef/MyProfileScreen';
import ProfileScreen from '../screens/chef/ProfileScreen'
import UploadScreen from '../screens/chef/UploadScreen';
import Colors from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Dimensions from '../constants/Dimensions';
import HomeScreen from '../screens/chef/HomeScreen' 
import SearchScreen from '../screens/chef/SearchScreen'
import ScanCameraFoodScreen from '../screens/chef/ScanCameraFoodScreen'
import RecipeDetailScreen from '../screens/chef/RecipeDetilScreen'
import { CommonActions } from '@react-navigation/native';
import ScanModal from '../modals/ScanModal';

const ChefTab = createBottomTabNavigator();

const width = Dimensions.width * 375

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const iconName = options.tabBarIcon

        const isFocused = state.index === index;

        const [isModalOpen,setisModalOpen] = useState(false)

        const onPress = () => {

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
           
          });

          if(index === 1){
            navigation.dispatch(
              CommonActions.navigate('UploadTab',{screen : 'Upload'})
            )
          }

          if (!isFocused && !event.defaultPrevented) {
           
            if(index !== 2){
              navigation.navigate(route.name);
            }
            else{
              setisModalOpen(true)
            }
           
          }
        };


        if (index === 2){
            return (
                <TouchableOpacity
                  key={index}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  style={{ flex: 1 , justifyContent : 'center' , alignItems : 'center' , height : 55 , width : 55, position : 'absolute' , left : (width/2) - 30 , bottom : 20 }}
                >
                    <View style={{ backgroundColor : Colors.primary , padding : 10, borderRadius : 25}}>
                        <AntDesign name="scan1" size={30} color={Colors.white} />
                    </View>
                  <Text style={{ marginTop : 5, fontSize : 12, color: isFocused ? Colors.primary : Colors.secondaryText }} >{label}</Text>

                  <ScanModal 
                    visible={isModalOpen}
                    closeModal={() => setisModalOpen(false)}
                  >
                    <MyTabBar/>
                  </ScanModal>
                
                </TouchableOpacity>

              );
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1 , marginRight : (index === 1) ? Dimensions.width * 60 : Dimensions.width * 5 , alignItems : 'center' , justifyContent : 'center' , height : 60 , marginLeft : 5 }}
          >
                <Feather name={iconName} size={25} color={isFocused ? Colors.primary : Colors.secondaryText } />
                <Text style={{ fontSize : 12, color: isFocused ? Colors.primary : Colors.secondaryText }}>
                {label}
                </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}



const ChefTabNavigator = () => {
  return (
    <ChefTab.Navigator tabBar={ props => <MyTabBar {...props} />}>
      <ChefTab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon : 'home'}}/>
      <ChefTab.Screen name="UploadTab" component={ChefStackNavigator}  options={{ 
          tabBarIcon : 'edit-3' , tabBarVisible : false}}/>
      <ChefTab.Screen  name="Scan" component={ScanModal} options={{ tabBarVisible : true}} />
      <ChefTab.Screen name="Notification" component={NotificationScreen} options={{ tabBarIcon : 'bell'}} />
      <ChefTab.Screen name="MyProfile" component={MyProfileScreen} options={{ tabBarIcon : 'user'}} />
    </ChefTab.Navigator>
  );
}

const ChefStack = createStackNavigator();


const ChefStackNavigator = () => {
  return(
    <ChefStack.Navigator headerMode = 'none' >
      <ChefStack.Screen name="Home" component={ChefTabNavigator} />
      <ChefStack.Screen name="Search" component={SearchScreen} />
      <ChefStack.Screen name="Upload" component={UploadScreen} />
      
      <ChefStack.Screen name="Scanned" component={ScanCameraFoodScreen} />
      <ChefStack.Screen name="Profile" component={ProfileScreen} />
      <ChefStack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      
    </ChefStack.Navigator>
  );
}


export default ChefStackNavigator