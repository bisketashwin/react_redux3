/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer,NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();


interface HomeScreenProps {
  navigation: NavigationProp<any, any>; // Adjust this type according to your navigation stack
}
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen - yah back on track</Text>
      <Button title="go to profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

interface profileScreenProps {
  navigation: NavigationProp<any, any>; // Adjust this type according to your navigation stack
}
const ProfileScreen: React.FC<profileScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen -oohoo</Text>
      <Button title="go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};




const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;