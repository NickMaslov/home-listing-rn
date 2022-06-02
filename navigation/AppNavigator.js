import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import AboutScreen from '../screens/AboutScreen';
import AddHomeScreen from '../screens/AddHomeScreen';
import HomeDetailsScreen from '../screens/HomeDetailsScreen';
import HomeListScreen from '../screens/HomeListScreen';

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeList'
        component={HomeListScreen}
        options={{ title: 'HomeHunt' }}
      />
      <Stack.Screen name='HomeDetails' component={HomeDetailsScreen} />
      <Stack.Screen name='AddHome' component={AddHomeScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'About') {
              iconName = 'info';
            }

            return <MaterialIcons name={iconName} size={24} />;
          },
        })}
      >
        <Tab.Screen
          name='Home'
          component={HomeStackNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen name='About' component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
