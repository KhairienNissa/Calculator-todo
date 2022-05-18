// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/home'
import Update from './src/screen/update'
import Calculator from './src/screen/calculator';
import ToDo from './src/screen/toDo'
import { NavigationContainer } from "@react-navigation/native"
import Container from './container'

export default function App() {
  return (
    
      <NavigationContainer>
        <Container/>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: "5px"
  },
});
