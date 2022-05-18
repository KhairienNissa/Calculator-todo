
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// const image = { uri: "https://w0.peakpx.com/wallpaper/147/311/HD-wallpaper-bts-jungkook-bangtan-bangtan-sonyeondan-bts-bulletproof-boys-jeon-jungkook-jeon-jungkook-jungkook-jungkookie.jpg" }

export default function Home({navigation}) {
  return (
    <View style={style1.container}>
      <Text style={style1.text}>Khairien Nissa</Text>
      <Text style={style1.text2}>Portfolio React-Native</Text>
    <View style={style1.btn}>
    <TouchableOpacity onPress={() => navigation.navigate('Calculator')} style= {style1.btnCal}>
        <Text style= {style1.textBtn}>Calculator</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ToDo')} style= {style1.btnTodo}>
        <Text style={style1.textBtn} >ToDo App</Text>
    </TouchableOpacity>
    </View>
    
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
    text: {
      color :"white",
      fontSize : 40,
      marginTop : "100px"
    },
    text2: {
      color :"white",
      fontSize : 15
    },
    btn : {
        flexDirection : "row",
        position : 'absolute',
        top : 500,
    },
    btnCal : {
        width : 100,
        height : 70,
        backgroundColor : "#6D4848",
        border : "1px solid white",
        justifyContent : 'center',
        alignItems : "center",
        borderRadius : 20,
        marginRight : 10
    },
    btnTodo : {
        width : 100,
        height : 70,
        backgroundColor : "#6D4848",
        border : "1px solid white",
        justifyContent : 'center',
        alignItems : "center",
        borderRadius : 20,
        marginLeft : 10
    },
    textBtn : {
        color :"white",
      fontSize : 15,
    },
    

  });
  