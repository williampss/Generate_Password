import{ useState } from 'react'
import{ View, Text, StyleSheet,Image,TouchableOpacity,Modal}from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from  '../../components/modal'

let charset ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home(){
 const [size, setSize] = useState(10)
 const [passwordValue, setPasswordValue] = useState("")
 const [modalVisible, setModalVisible] = useState(false)

 function generatePassword (){
  let password = "";

  for(let i = 0, n = charset.length; i < size; i++){
    password+= charset.charAt(Math.floor(Math.random() * n))
  }
  setPasswordValue(password)
  setModalVisible(true);
 }

  return(
      <View style= {styles.container} >
        <Image source={require("../../assests/LogoApp.png")}
        style={styles.logo}
        />
        <Text style={styles.title}>{size} caracteres</Text>
        <View style={styles.area}>
          <Slider
          style={{ height:50}}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor='blue'
          thumbTintColor='blue'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
          />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.buttonText}>Gerar senha</Text >
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType='fade' transparent={true}>
          <ModalPassword password={passwordValue} handLeClose={() => setModalVisible(false)}/>
        </Modal>

      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#ffff",
    justifyContent:'center',
    alignItems: 'center', 
  },
  logo:{
    marginBottom:60,
  },
  area:{
    marginTop:14,
    marginBottom:70,
    width: "80%",
    backgroundColor:"purple",
    borderRadius:30,
    padding:7,
  },
  button:{
    backgroundColor:"black",
    width: "80%",
    height:50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
  },
  buttonText:{
    color: "purple",
    fontSize: 20,
    fontWeight: "bold",
   
  },
  title:{
    fontSize:30,
    fontWeight: "bold"
  }

})
