import React, { useState } from "react";
import { StyleSheet, View, Alert, Image } from "react-native";
import { Input, Text, Button } from "@ui-kitten/components";

const LoginScreen = ({ navigation }) => {
    const validUsers = [
        {
            email: "john.doe@htu.edu",
            password: "secret123",
        },
        {
            email: "f",
            password: "f",
        },
    ];

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const user = validUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            navigation.replace("MainApp");
        } else {
            Alert.alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title} category="h1">
                Login
            </Text>

            <Input
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <Input
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <View style={styles.buttonContainer}>
                <Button onPress={handleLogin} style={styles.button}>
                    {(evaProps) => (
                        <Text
                            {...evaProps}
                            style={{
                                fontSize: 18,
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            Go
                        </Text>
                    )}
                </Button>
            </View>
            <Image
                source={require("../images/HTU.png")}
                style={styles.image}
            ></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: -100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 20,
    },
    title: {
        marginBottom: 40,
    },
    input: {
        marginBottom: 20,
        marginHorizontal: 15,
    },
    button: {
        backgroundColor: "#EA383E",
        borderColor: "transparent",
    },
    buttonText: {
        fontSize: 40,
    },
    buttonContainer: {
        width: "80%",
        marginTop: 10,
    },
    image: {
        position: "absolute",
        bottom: 50,
        width: 70,
        height: 70,
    },
});

export default LoginScreen;
