import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Linking,
  Alert,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

export default function StudentScreen() {

  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [isDark, setIsDark] = useState(false); // ✅ theme state

  const navigation = useNavigation();

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            Linking.openURL("http://localhost:8080/logout");
            navigation.replace("Login");
          }
        }
      ]
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchStudents();
    }, [])
  );

  // 🔵 Loader
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="blue" />
        <Text style={{color: isDark ? "#fff" : "#000"}}>
          Loading students...
        </Text>
      </View>
    );
  }

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDark ? "#121212" : "#f5f7fa" }
    ]}>

      {/* Top Bar */}
      <View style={styles.topBar}>

        {/* Logout */}
        <Text
          style={[
            styles.logout,
            { color: isDark ? "#ff6b6b" : "red" }
          ]}
          onPress={handleLogout}
        >
          Logout
        </Text>

        {/* 🌙 Toggle Button */}
        <TouchableOpacity onPress={() => setIsDark(!isDark)}>
          <Text style={{
            color: isDark ? "#fff" : "#000",
            fontWeight:"bold"
          }}>
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (

          <View style={[
            styles.card,
            { backgroundColor: isDark ? "#1e1e1e" : "#fff" }
          ]}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.name.charAt(0)}
              </Text>
            </View>

            <View style={{marginLeft:10}}>
              <Text style={[
                styles.name,
                { color: isDark ? "#fff" : "#000" }
              ]}>
                {item.name}
              </Text>

              <Text style={[
                styles.text,
                { color: isDark ? "#bbb" : "#666" }
              ]}>
                {item.city}
              </Text>

              <Text style={[
                styles.email,
                { color: isDark ? "#888" : "#999" }
              ]}>
                {item.email}
              </Text>
            </View>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:15
  },

  topBar:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:10
  },

  logout:{
    fontWeight:"bold"
  },

  card:{
    flexDirection:"row",
    padding:15,
    borderRadius:12,
    marginBottom:12,
    alignItems:"center",
    elevation:3
  },

  avatar:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:"#4A90E2",
    justifyContent:"center",
    alignItems:"center"
  },

  avatarText:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold"
  },

  name:{
    fontSize:16,
    fontWeight:"bold"
  },

  text:{
    fontSize:13
  },

  email:{
    fontSize:12
  },

  loader:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }

});