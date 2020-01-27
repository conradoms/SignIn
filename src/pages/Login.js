import React, { useState } from 'react';
import { 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    Image, 
    KeyboardAvoidingView, 
    Alert,
    AsyncStorage
} from 'react-native';


function Login({ navigation }){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    logar = async () => {
        if(login != 'Conrado' || senha != 'bananinha'){
            Alert.alert(
                'Erro ao fazer login!',
                'Login ou senha incorretos.'
            );
        }
        else{
            await AsyncStorage.setItem('userToken', 'abc');
            navigation.navigate('App');
        }
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior='padding'
            enabled
        >
            <Image 
                source={ require('../../assets/login.png') } 
                style={styles.logo}
            />
            <Text style={styles.boasVindas}>
                Seja bem-vindo! Faça seu login.
            </Text>
            <TextInput 
                placeholder='Insira seu nome de usuário'
                onChangeText={setLogin}
                value={login}
                style={styles.login}
            />
            <TextInput 
                placeholder='Insira sua senha'
                onChangeText={setSenha}
                value={senha}
                style={styles.login}
                secureTextEntry= {true}
            />
            <TouchableOpacity 
                onPress={logar} 
                style={styles.btnLogar}
            >
                <Text style={styles.btnLogarTexto}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666'
    },
    login: {
        width: 300,
        borderRadius: 4,
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10
    },
    logo: {
        marginBottom: 10,
        width: 80,
        height: 80
    },
    boasVindas: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 15
    },
    btnLogar:{
        width: 300,
        backgroundColor: '#3498db',
        padding: 5,
        borderRadius: 4,
        marginTop: 10,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 4
    },
    btnLogarTexto:{
        fontSize: 20
    }
});

export default Login;