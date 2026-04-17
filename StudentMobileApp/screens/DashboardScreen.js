import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, useColorScheme, Linking} from 'react-native';
import axios from 'axios';

export default function DashboardScreen({navigation}) {

  const isDark = useColorScheme() === "dark";

  const refreshData = async () => {
    try {
      await axios.post("http://localhost:8080/api/students/generate");
      navigation.navigate("Students");
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    Linking.openURL("http://localhost:8080/logout");
    navigation.replace("Login");
  };

  return (
    <View style={[
      styles.container,
      {backgroundColor: isDark ? "#121212" : "#f5f7fa"}
    ]}>

      <Text style={[
        styles.title,
        {color: isDark ? "#fff" : "#333"}
      ]}>
        Dashboard
      </Text>

      <View style={[
        styles.card,
        {backgroundColor: isDark ? "#1e1e1e" : "#fff"}
      ]}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Students")}
        >
          <Text style={styles.buttonText}>View Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={refreshData}
        >
          <Text style={styles.buttonText}>Refresh Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logout}
          onPress={logoutUser}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:30
  },

  card:{
    width:"85%",
    borderRadius:15,
    padding:25,
    elevation:6
  },

  button:{
    backgroundColor:"#4A90E2",
    padding:15,
    borderRadius:10,
    marginBottom:15,
    alignItems:"center"
  },

  logout:{
    backgroundColor:"#e74c3c",
    padding:15,
    borderRadius:10,
    alignItems:"center"
  },

  buttonText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"600"
  }

});