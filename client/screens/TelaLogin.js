import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Checkbox } from '../components/Checkbox';

export function TelaLogin() {
    const [cpf, setCpf] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [selecionado, setSelecionado] = React.useState(false);

    useFonts({ 'Roboto': require('../assets/Roboto-Regular.ttf') });

    return (
        <View style={styles.container}>
            <View style={styles.loginView}>
                <View style={styles.logo}>
                    <Image source={require('../assets/logo.png')} style={styles.image} />
                    <Text style={styles.logoText}>EXUS</Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                        placeholder='CPF'
                        onChangeText={setCpf}
                        style={styles.inputCpf}
                        value={cpf}
                        keyboardType="numeric"
                    />
                    <TextInput
                        onChangeText={setSenha}
                        placeholder='SENHA'
                        value={senha}
                        style={styles.inputSenha}
                    />
                    <Checkbox
                        checked={selecionado}
                        onPress={() => setSelecionado(prevSelecionado => !prevSelecionado)}
                        message="Mantenha-se conectado"
                        style={styles.checkbox}
                    />
                    <TouchableOpacity
                        style={styles.buttonEntrar}>
                        <Text style={styles.textEntrar}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cadastroView}>
                <Text style={styles.textCadastro}>Não possui uma conta?</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonCadastro}>Cadastre-se aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    image: {
        width: 130,
        height: 130,
        marginBottom: 50
    },
    logoText: {
        fontFamily: "Roboto",
        fontSize: 48,
        color: "#FFFFFF",
        marginBottom: 50
    },
    form: {
        flex: 1,
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight
    },
    loginView: {
        flex: 7,
        backgroundColor: '#183557',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingVertical: 50,
        paddingHorizontal: 50
    },
    inputCpf: {
        fontFamily: 'Roboto',
        height: 37,
        backgroundColor: '#EAEAEA',
        paddingLeft: 10,
        fontSize: 18,
        marginBottom: 30
    },
    inputSenha: {
        fontFamily: 'Roboto',
        height: 37,
        backgroundColor: '#EAEAEA',
        paddingLeft: 10,
        fontSize: 18,
        marginBottom: 30
    },
    buttonEntrar: {
        width: 120,
        paddingVertical: 10,
        backgroundColor: '#36B8B8',
        textAlign: 'center',
        alignSelf: "center"
    },
    textEntrar: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    cadastroView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCadastro: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#6A6A6A',
        alignItems: 'center'
    },
    buttonCadastro: {
        fontFamily: 'Roboto',
        textDecorationLine: 'underline',
        fontSize: 18,
        marginTop: 10
    }
});