import {useState,useEffect} from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import {PasswordItem} from './components/passwordItem'

export function Passwords(){
    const[listPassswords, setListPassswords] = useState([])
    const focused = useIsFocused ();
    const { getItem, removeItem } = useStorage ();

    useEffect (() => {

         async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPassswords(passwords); 
         }
          
         loadPasswords();
    }, [focused])

    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item)
        setListPassswords(passwords)
        
    }

    return(
        <SafeAreaView style={{flex:1,}}>
            <View style={styles.header}>
              <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                   
                    style={{flex:1, paddingTop:14,}}
                    data={listPassswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item)}/> }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "purple",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14, 
    },
    title:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    content:{
        flex:1,
        paddingLeft:14,
        paddingRight:14,
    },
})