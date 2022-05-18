import * as React from "react";
//Navigation Container
import { NavigationContainer } from "@react-navigation/native"
//Stack Navigation
import { createStackNavigator } from "@react-navigation/stack"
//Screen
import Home from './src/screen/home'
import Update from './src/screen/update'
import Calculator from './src/screen/calculator';
import ToDo from './src/screen/toDo'

// Create Stack Navigation
const Stack = createStackNavigator()

// Using DB Reference


export default function Container() {
  return(
 
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "#fff",
          headerStyle: {backgroundColor: '#18181b'},
          headerShadowVisible: false,
        }}
      >

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="Update"
          component={Update}
          options={{
            title: "Update Task",
          }}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{
            title: "Calculator",
          }}
        />
        <Stack.Screen
          name="ToDo"
          component={ToDo}
          options={{
            title: "My To Do List",
          }}
        />
        


      </Stack.Navigator>
  )
}