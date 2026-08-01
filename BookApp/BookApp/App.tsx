import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomButton from './src/components/CustomButton';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <CustomButton title ="Mi Boton 1" 
                    onPress={()=>{console.log("1")}}/>
      <CustomButton title ="Mi Boton 2" 
                    onPress={()=>{console.log("2")}}
                    variant='secondary'/>
      <CustomButton title ="Mi Boton 3 Prueba" 
                    onPress={()=>{console.log("3")}}
                    variant = 'tertiary'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
