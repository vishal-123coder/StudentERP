import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

export default function LoginScreen({ navigation }) {

  const googleLogin = () => {
    Linking.openURL("http://localhost:8080/oauth2/authorization/google?prompt=select_account");
    navigation.navigate("Dashboard");
  };

  const githubLogin = () => {
    Linking.openURL("http://localhost:8080/oauth2/authorization/github");
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>Student App</Text>

        <TouchableOpacity style={styles.google} onPress={googleLogin}>
          <Text style={styles.text}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.github} onPress={githubLogin}>
          <Text style={styles.text}>Login with GitHub</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f5f7fa"
  },
  card:{
    width:"85%",
    backgroundColor:"#fff",
    padding:30,
    borderRadius:15,
    elevation:6
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:25,
    textAlign:"center"
  },
  google:{
    backgroundColor:"#DB4437",
    padding:15,
    borderRadius:10,
    marginBottom:15,
    alignItems:"center"
  },
  github:{
    backgroundColor:"#333",
    padding:15,
    borderRadius:10,
    alignItems:"center"
  },
  text:{
    color:"#fff",
    fontSize:16,
    fontWeight:"600"
  }
});