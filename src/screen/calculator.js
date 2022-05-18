import * as React from "react";
import { Text, View, TouchableOpacity} from 'react-native';

import { Styles } from '../style/globalStyle';


export default function Calculator() {

    const [count, setCount] = React.useState(0)

    const handleNumber = (value) => {
        if (count == 0) {
            return setCount(count + value)
        } else {
            return setCount ( count + '' + value)
        }
    }

    const clear = () => {
        setCount(0)
    }

    const result =() => {
      let total = eval(count)
      return setCount(total)
  }

const del = () => {
   if (count.length > 0) {
       return setCount(count.slice(0, -1))
   } else {
       return setCount(0)
   }
}
   
  return (
      <View style={Styles.container}> <View style={Styles.viewBottom}>

        <View style= {Styles.result}>
        <Text style={{
            color:"white", fontSize:"70px"}}>
                {count}</Text>
        </View>
        
        <View style= {Styles.row}>
        <TouchableOpacity style={Styles.btnPink}  onPress={() => clear()}>
            <Text style={Styles.text}>C</Text>
         </TouchableOpacity>
        <TouchableOpacity style={Styles.btnPink}>
            <Text style={Styles.text}>+/-</Text>
         </TouchableOpacity>
        <TouchableOpacity style={Styles.btnPink} onPress={() => handleNumber('%')}>
            <Text style={Styles.text}>%</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnRed} onPress={() => handleNumber('/')}>
            <Text style={Styles.text}>÷</Text>
         </TouchableOpacity>
        </View>

        <View style= {Styles.row}>
        <TouchableOpacity style={Styles.btnBlack} onPress={() => handleNumber(7)}>
            <Text style={Styles.text}>7</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnBlack} onPress={() => handleNumber(8)}>
            <Text style={Styles.text}>8</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnBlack} onPress={() => handleNumber(9)}>
            <Text style={Styles.text}>9</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnRed} onPress={() => handleNumber('*')}>
            <Text style={Styles.text}>x</Text>
         </TouchableOpacity>
        </View>

        <View style= {Styles.row}>
        <TouchableOpacity style={Styles.btnBlack} onPress={() => handleNumber(4)}>
            <Text style={Styles.text}>4</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnBlack} onPress={() => handleNumber(5)}>
            <Text style={Styles.text}>5</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnBlack} onPress={() => handleNumber(6)}>
            <Text style={Styles.text}>6</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnRed} onPress={() => handleNumber('-')}>
            <Text style={Styles.text}>-</Text>
         </TouchableOpacity>
        </View>

        <View style= {Styles.row}>
        <TouchableOpacity style={Styles.btnBlack} onPress={() => handleNumber(1)}>
            <Text style={Styles.text}>1</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnBlack} onPress={() => handleNumber(2)}>
            <Text style={Styles.text}>2</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnBlack}onPress={() => handleNumber(3)}>
            <Text style={Styles.text}>3</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnRed} onPress={() => handleNumber('+')}>
            <Text style={Styles.text}>+</Text>
         </TouchableOpacity>
        </View>

        <View style= {Styles.row}>
        <TouchableOpacity style={Styles.btnBlack} onPress={() => handleNumber('.')}>
            <Text style={Styles.text}>.</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnBlack} onPress={() => handleNumber(0)}>
            <Text style={Styles.text}>0</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnBlack} onPress={() => del()}>
            <Text style={Styles.text}>⌫</Text>
         </TouchableOpacity>
         <TouchableOpacity style={Styles.btnRed} onPress={() => result()}>
            <Text style={Styles.text}>=</Text>
         </TouchableOpacity>
        </View>

        
      
        
       

{/*         
            <TouchableOpacity style={Styles.btnRed}>
            <Text style={Styles.text}>haha</Text>
         </TouchableOpacity>
        <TouchableOpacity style={Styles.btnPink}>
            <Text style={Styles.text}>haha</Text>
         </TouchableOpacity>
        <TouchableOpacity style={Styles.btnBlack}>
            <Text style={Styles.text}>haha</Text>
         </TouchableOpacity> */}
        </View> 
        </View>
   
        
    // </View>
  );
}

