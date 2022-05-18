import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { API } from '../config/api';

// const image = { uri: "https://w0.peakpx.com/wallpaper/147/311/HD-wallpaper-bts-jungkook-bangtan-bangtan-sonyeondan-bts-bulletproof-boys-jeon-jungkook-jeon-jungkook-jungkook-jungkookie.jpg" }

export default function Update({route, navigation}) {
  console.log(route.params);
  const {_id, name} = route.params

  const [task, setTask] = useState();

  const handleUpdate = async(_id) => {
    const response = await API.patch(`/${_id}`, {
        name: task
    })
    console.log(response.data);
    setTask('')
    
    // alert('Success update task!')
    navigation.navigate('Home')
}

  return (
    <View style={style1.container}>

    <KeyboardAvoidingView>
     <TextInput
          // placeholder="useless placeholder"
          placeholder={name}
          value={task}
          onChangeText={text => setTask(text)}
          style={style1.inputText}
        />

    <TouchableOpacity style={style1.btnUp}  onPress={() => handleUpdate(_id)}> 
      <Text style={{color:'white', fontWeight: "bold", fontSize:"15px"}}>Update</Text> </TouchableOpacity>
  </KeyboardAvoidingView>

    </View>
  );
}

const style1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height : "100%",
    alignItems: 'center',
    paddingTop : 40

  },
  
        
    inputText: {
            backgroundColor : "#F3F0F0",
            width:320,
            borderRadius: 15,
            paddingVertical: 20,
            paddingHorizontal: 15,
        },
    btnUp : {
        backgroundColor : "#7C0F0F",
        width: 320,
        height: 50,
        
        marginTop: 20,
        borderRadius: 15,
          justifyContent: "center" ,
          alignItems:"center"
    }
    

  });
  