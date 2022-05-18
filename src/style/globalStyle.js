import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        height : "100%",
        alignItems: 'center',
  
      },
    // Button
    btnPink: {
        width: 80,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#6D4848',
        justifyContent: "center",
        alignItems: "center",
        margin: 6,
    },
    btnRed: {
        width: 80,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#7C0F0F',
        justifyContent: "center",
        alignItems: "center",
        margin: 6,
    },
    btnBlack: {
        width: 80,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#000000',
        justifyContent: "center",
        alignItems: "center",
        margin: 6,
        border : "1px solid #6D4848"
    },
    text : {
        color : 'white',
        fontSize : 26
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    result : {
        maxWidth: '100%',
        flexDirection: "row",
        flex : 1,
        justifyContent : "flex-end",
        padding: 20,
      
        
    }
    // screenSecondNumber: {
    //     fontSize: 40,
    //     color: myColors.gray,
    //     fontWeight: '200',
    //     alignSelf: "flex-end",
    // },
})