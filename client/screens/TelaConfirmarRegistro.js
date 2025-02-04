import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, TextInput, TouchableOpacity, Text, Modal } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { showErrorMessage } from "../utils/errorHandlers";
import { initialState } from "./TelaRegistro";

export function TelaConfirmarRegistro({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [state, setState] = useState(initialState);


    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" backgroundColor="#183557" />

            <View style={styles.topContent}>
                <TextInput
                    placeholder="EMAIL"
                    style={styles.input}
                    value={state.email}
                    onChangeText={text => handleEmailChange(text, setState)}
                    keyboardType="email-address"
                    isValid={state.isEmailValid}
                />

                <TextInput
                    placeholder="SENHA"
                    style={styles.input}
                    value={state.password}
                    onChangeText={text => handlePasswordChange(text, setState)}
                    secureTextEntry={true}
                    isValid={state.isPasswordValid}
                />

                <TextInput
                    placeholder="CONFIRMAR SENHA"
                    value={state.confirmPassword}
                    onChangeText={text => handleConfirmPasswordChange(text)}
                    style={styles.input}
                    secureTextEntry={true}
                    isValid={state.isConfirmPasswordValid}
                />
            </View>

            <View style={styles.buttonsView}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#98D4D4" }]} onPress={() => navigation.goBack()}>
                    <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setModalOpen(true)}>
                    <Text style={styles.textButton}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.textModalTop}>
                        Bem vindo ao Exus!
                    </Text>
                    <Text style={styles.textModalBottom}>
                        Sua conta foi criada com sucesso. Clique em Continuar para acessá-la!
                    </Text>

                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: "#EAEAEA" }]}
                            onPress={() => navigation.navigate("TelaLogin")}
                        >
                            <Text style={[styles.textButton, { color: "#333333" }]}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContent: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#183557",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 50,
        flex: 8
    },
    input: {
        height: 55,
        fontSize: 18,
        paddingLeft: 15,
        marginBottom: 50,
        marginTop: 30,
        backgroundColor: "white"
    },
    buttonsView: {
        flex: 3,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 30,
        alignItems: "center"
    },
    button: {
        backgroundColor: "#36B8B8",
        paddingHorizontal: 20,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        width: 135
    },
    textButton: {
        fontSize: 18,
        color: "white"
    },

    //Style modal
    modalView: {
        backgroundColor: "#183557",
        height: "100%",
        justifyContent: "center"
    },
    textModalTop: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginHorizontal: 50,
        paddingTop: 20,
        paddingBottom: 100,
        lineHeight: 24
    },
    textModalBottom: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginHorizontal: 50,
        justifyContent: "center",
        lineHeight: 24
    },
    buttonView: {
        alignItems: "center",
        marginTop: 100
    }
});