import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function PasswordItem({data,removePassword, alert}){
  return(
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "purple",
    padding: 14,
    width: "100%",
    marginBottom:14,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
  },
  text:{
    color: "#fff",
  },

})