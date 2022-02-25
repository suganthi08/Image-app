import  React,{ Component } from 'react';
import { Text, View, StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar} from 'react-native';
import { Header } from 'react-native-elements';


export default class HomeScreen extends Component {

 goToPortraitScreen = () => {
    this.props.navigation.navigate('PortraitScreen');
  };

 goToLandscapeScreen = () => {
    this.props.navigation.navigate('LandscapeScreen');
  };  

 goToAbstractScreen = () => {
    this.props.navigation.navigate('AbstractScreen');
  };

 render(){
  return (
   
    <View style={styles.container}>
    
    <Text style ={styles.textStyle}> Welcome </Text>

   

    <View style={styles.container}>

     <TouchableOpacity style = {styles.button}
       onPress={() => {
            this.goToPortraitScreen();
          }}>
         <Text style = {styles.buttonText}> Click me to upload Portrait pics </Text>
     </TouchableOpacity>

     <TouchableOpacity style = {styles.button}
       onPress={() => {
            this.goToLandscapeScreen();
          }}>
         <Text style = {styles.buttonText}> Click me to upload Landscape pics </Text>
     </TouchableOpacity>

     <TouchableOpacity style = {styles.button}
     onPress={() => {
            this.goToAbstractScreen();
          }}>
         <Text style = {styles.buttonText}> Click me to upload Abstract pics </Text>
     </TouchableOpacity>



     </View>
    </View>
   
  );
}
}

const styles = StyleSheet.create({
  container: {
     
    backgroundColor: "pink",
  },

 button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 40,
    marginBottom : 70,
    width: 250,
    height: 70,
    backgroundColor : 'gray'
  },

   buttonText: {
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    fontSize : 15,
    fontWeight :500
      },

  textStyle :{
    textAlign : "center",
    marginTop : 1,
    fontSize: 40,
    fontWeight : 1000,
    backgroundColor: "#00008B",
    height: 60,
    justifyContent:"center", 
    alignItems : "center",
    color:"white"
  }
  

 
  
});
