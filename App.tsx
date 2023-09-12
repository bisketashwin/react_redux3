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
import ColorSwatches from './src/screens/ColorSwatches';
import { store } from "./store/store";
import { Provider } from "react-redux";


const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();


interface HomeScreenProps {
  navigation: NavigationProp<any, any>; // Adjust this type according to your navigation stack
}
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{margin:30}}>
      <Text style={styles.text}>I am so happy</Text>
      <Text style={styles.text2}>I could produce base template. I will be able to use it to build almost any appss flow</Text>
      <Text style={styles.text2}>1. Stack Navigator</Text>
      <Text style={styles.text2}>2. Drawer Navigator</Text>
      <Text style={styles.text2}>3. Tab Navigator (To be Added ;D )</Text>
      <Text style={styles.text2}>2. Redux integrated</Text>
      <View style={{width:200, alignSelf:'center'}}>
       
      <Text> This is a redux example </Text>
      <Button title="go to Colour Swatches" onPress={() => navigation.navigate('Colour Swatches')} />
      <Text> This is stack navigator example </Text>
      <Button title="go to profile"  onPress={() => navigation.navigate('Profile')} />
      </View>
      
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
      <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown:false}} />
      <Drawer.Screen name="Colour Swatches" component={ColorSwatches} />
      <Drawer.Screen name="Profile" component={ProfileScreen} 
      options={{
        headerLeft: (props) => (
          <MyButton
            {...props}
            onPress={() => {
              // Do something
            }}
          />
        ),
      }}/>
    </Drawer.Navigator>
  );
}


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Draw"
          component={MyDrawer}
          options={{ headerShown:false}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}



const styles = StyleSheet.create({
  text:{
    fontSize:24,
    color:'#000000',
  },
  text2:{
    fontSize:16,
    color:'#000000',
  }
})