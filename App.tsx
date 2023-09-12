// this should be top most import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
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
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();


interface HomeScreenProps {
  navigation: NavigationProp<any, any>; // Adjust this type according to your navigation stack
}
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen - Just checking after redux dependcies install if there is anything braking</Text>
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
      <Text style={styles.text}>Profile Screen -oohoo</Text>
      <Button title="go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};


function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyDrawer}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  text:{
    fontSize:24,
    color:'#000000',
  }
})