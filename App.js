import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import globalStyles from './src/styles/globalStyles';
import Login from './src/pages/Login'


const Stack = createNativeStackNavigator()

const App = () =>{
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Login" component = {Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  )
}
export default App