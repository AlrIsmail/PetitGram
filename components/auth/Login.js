import firebase from 'firebase';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUp = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    return (
        <View style={container.center}>
            <View style={container.formCenter}>
                <TextInput
                    style={form.textInput}
                    placeholder="email"
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    style={form.textInput}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />

                <Button
                    style={form.button}
                    onPress={() => onSignUp()}
                    title="Sign In"
                />
            </View>


            <View style={form.bottomButton} >
                <Text
                    title="Register"
                    onPress={() => props.navigation.navigate("Register")} >
                    Don't have an account? SignUp.
                </Text>
            </View>
        </View>
    )
}

const container = {
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formCenter: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

const form = {
    textInput: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    bottomButton: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
}