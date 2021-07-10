import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text h3>Sign Up for Tracker</Text>
            <Spacer/>
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                label="Email" 
                value={email} 
                onChangeText={setEmail}
            />
            <Spacer/>
            <Input 
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                label="Password" 
                value={password} 
                onChangeText={setPassword}
            />
            <Spacer/>
            <Button 
                title="Sign Up" 
                onPress={() => signup({ email, password })}
            />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;
