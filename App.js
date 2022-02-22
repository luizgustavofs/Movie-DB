import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 

import Movies from './src/Screens/Movies';
import Series from './src/Screens/Series';
import Search from './src/Screens/Search';
import Soon from './src/Screens/Soon';
import { StatusBar } from 'react-native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { Calendar, Movie, SearchIcon, TvShow } from './src/svgs';


const Tab = AnimatedTabBarNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <StatusBar barStyle={'light-content'}/>
    <Tab.Navigator 
    // screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: '#1B1721', borderTopColor: 'transparent'}}}
    tabBarOptions={{
      activeTintColor: "#fff",
      inactiveTintColor: "#000",
      labelStyle:{
        fontSize: 14,
      },
      activeBackgroundColor: '#DE1A3A'
    }}
    appearance={{tabBarBackground: '#1B1721'}}
  >

      <Tab.Screen 
      name="Series" 
      component={Series}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <TvShow
              height={size ? size : 24}
              width={size ? size : 24}
              color={focused ? color : "#B8B7C3"}
            />
        )
      }}
      
      />
      <Tab.Screen 
      name="Movies" 
      component={Movies}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Movie
                height={size ? size : 24}
                width={size ? size : 24}
                color={focused ? color : "#B8B7C3"}
            />
        )
      }}
      
      />
      <Tab.Screen 
      name="Search" 
      component={Search}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <SearchIcon
              height={size ? size : 24}
              width={size ? size : 24}
              color={focused ? color : "#B8B7C3"}
            />
        )
      }}
      
      />
      <Tab.Screen 
      name="Calendar" 
      component={Soon}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Calendar
              height={size ? size : 24}
              width={size ? size : 24}
              color={focused ? color : "#B8B7C3"}
            />
        )
      }}
      
      />

    </Tab.Navigator>
  </NavigationContainer>
  );
}