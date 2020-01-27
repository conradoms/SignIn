import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Dashboard({ navigation }){

    logoff = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text>
                Alllooowwwww. Conrado Aqui. Obrigado por estar usando nosso app!!!
            </Text>
            <Text style={styles.textoDeslogar}>
                Click no botão abaixo para deslogar!
            </Text>
            <TouchableOpacity 
                style={styles.logoff}
                onPress={logoff}
            >
                <Text style={styles.textoLogoff}>
                    Logoff
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        paddingHorizontal: 10
    },
    textoDeslogar: {
        marginTop: 30
    },
    logoff: {
        width: 180,
        backgroundColor: '#900',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 4,
        borderRadius: 4
    },
    textoLogoff: {
        fontSize: 16,
        color: '#fff'
    }
})

export default Dashboard;