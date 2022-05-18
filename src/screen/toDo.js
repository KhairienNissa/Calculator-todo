
import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native';
// import TaskTodo from '../component/taskTodo';
import {API} from '../config/api'


export default function ToDo({navigation}) {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = async() => {
    // Keyboard.dismiss();
    // setTaskItems([...taskItems, task])
    // setTask(null);
    const response = await API.post('/', {
      name: task
  })
      console.log(response.data);
        setTask('')
  }


  const getTask = () => {
    API.get('/')
    .then((res) => { 
      setTaskItems(res.data)
      console.log(res.data);
    })
  }

  React.useEffect(() => {
    getTask()
  },[task])
  
  const completeTask = async (_id) => {
    await API.delete(`/${_id}`)
    getTask()
  }




    return (
      <View style={style1.container}> 
            <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >   
          {/* <Text style={style1.title}>My To Do List</Text> */}
   
          {
            taskItems.map((item) => {
              return (
                <View style={style1.todoall}>
                <TouchableOpacity onPress={() => completeTask(item._id)}>
                <View style={style1.toDo}>
                    <Text style={style1.textTodo}>{item.name}</Text>
                    
                    <View style={style1.checkbox}>

                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={style1.btnUp} key={item._id} onPress={() => navigation.navigate('Update', item)} >
                <Text style={style1.textUp}>Edit</Text>  
                </TouchableOpacity>
                </View>
              )
            })
          }
   </ScrollView>
  
  <KeyboardAvoidingView style={style1.bawah}>
  <TextInput placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}
          // placeholder="useless placeholder"
    
          style={style1.inputText}
        />
          <TouchableOpacity style={style1.btnAdd} onPress={(e) => handleAddTask(e.preventDefault())}> 
      <Text style={{color:'white', fontWeight: "bold", fontSize:"15px"}}>Add</Text> </TouchableOpacity>
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

    },
      bawah: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      inputText: {
          backgroundColor : "#F3F0F0",
          width:290,
          borderRadius: 15,
          paddingVertical: 15,
          paddingHorizontal: 15,
      },
      btnAdd : {
          backgroundColor : "#7C0F0F",
          width: 70,
          height: 50,
          marginLeft: 10,
          borderRadius: 15,
            justifyContent: "center" ,
            alignItems:"center"
      },
      // title : {
      //     color: "white",
      //     fontSize : "17px",
      //     // fontWeight : "bold",
      //     textAlign : "center",
      //     marginBottom : 30,
          
  
      // },
      delete : {
          backgroundColor : "#7C0F0F",
          width: 120,
          height: 50,
          marginLeft: 10,
          borderRadius: 10,
            justifyContent: "center" ,
            alignItems:"center"
      },
      todoall : {
        alignItems:"center",
        flexDirection  : 'row',
        marginTop : 10,
        padding: 5,
        justifyContent: 'space-between',
      },
      btnUp: {
        backgroundColor : "white",
        border : "2px solid #F3F0F0",
        width : 60,
        padding : 15,
        borderRadius : 20,
        marginLeft: 10,
          justifyContent: "center" ,
          alignItems:"center"
      },
      textUp : {
        color : "#7C0F0F",
       fontWeight: "bold",
        fontSize:"15px"
      },
      toDo : {
        backgroundColor: "#6D4848",
        width : 290,
        borderRadius: 20,
        alignItems:"center",
        flexDirection  : 'row',
        padding: 17,
        justifyContent: 'space-between',
    },
    textTodo : {
        color : "white",
        fontSize : "15px",
        paddingLeft: "15px",
        maxWidth : "80%",
        flexWrap: 'wrap'
    },
    checkbox : {
        height: "10px",
        width : "10px",
        marginRight : '15px',
        backgroundColor: 'white',
        opacity : 0.4,
        borderRadius: 5

    },
  
      // bawah : {
      //     flex : 1,
      //     alignItems: 'center',
      //     justifyContent: 'flex-end',
      //     marginTop : 100
           
      // }
    });
    
  