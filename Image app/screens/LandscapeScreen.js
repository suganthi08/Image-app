import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground,
    Alert,
    Image,
    TouchableOpacity
} from "react-native";
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import firebase from "firebase";

export default class LandscapeScreen extends React.Component {

  state = {
    cameraPermission : false,
    image: "#",
    
  };

 startCamera = async () => {

    const {status,uri} = await Camera.requestPermissionsAsync()
     if(status === 'granted'){
      this.setState({cameraPermission:true})
      const photo = await Camera.takePictureAsync()
      this.setState ({image:uri})
      this.uploadImage(uri, Date.now());
      } 
     else{
        Alert.alert("Access denied")
      }

  }
  
  selectPicture = async () => {
    
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3,2],
      quality: 1,
    });

    if (!cancelled) {
      this.setState ({image:uri})
      this.uploadImage(uri, Date.now());
    }
  };

  
  uploadImage = async (uri, imageName) => {

    var response = await fetch(uri);
    var blob = await response.blob();
   Alert("Pic uploaded successfully")

    var ref = firebase
      .storage()
      .ref()
      .child("landscape_pics/" + imageName );

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  
  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child("landscape_pics/" + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: "#" });
      });
  };

  
render(){

   return(
    <View style={styles.container}>

     <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2016/06/18/596215_rotate_512x512.png',
          }}
        />
    
    <TouchableOpacity style = {styles.button}
         onPress = {this.selectPicture}>
         <Image source={require("../assets/upload.png")} style={styles.iconImage}></Image>
     </TouchableOpacity>

     <TouchableOpacity style = {styles.button}
        onPress = {this.startCamera}>
         <Image source={require("../assets/camera.png")} style={styles.iconImage}></Image>
     </TouchableOpacity>

    </View>
    
  )
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor: "lightblue",
  },

    button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 60,
    marginBottom : 70,
    width: 250,
    height: 70,
    backgroundColor : 'gray'
  },

   buttonText: {
    textAlign: 'center',
    color: 'Black',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight:50
  },

    imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 90,
    marginTop : 20
  },

  iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -70
    }

})