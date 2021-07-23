import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Text h3>{headerText}</Text>
            <Spacer />
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Spacer />
            <Input
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                value={password}
                onChangeText={setPassword}
            />
            <Spacer />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Button
                title={submitButtonText}
                onPress={() => onSubmit({ email, password })}
            />
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginBottom: 15,
        marginLeft: 15
    },
});

export default AuthForm;
