import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "@ui-kitten/components";

const ProfileScreen = ({ navigation }) => {
    const user = {
        name: "John Doe",
        studentId: "123456",
        email: "johndoe@htu.edu",
    };

    const handleLogout = () => {
        navigation.replace("Login");
    };

    return (
        <View style={styles.container}>
            <Text category="h2" style={styles.title}>
                Profile
            </Text>
            <Text category="S1" style={styles.info}>
                Name: {user.name}
            </Text>
            <Text style={styles.info}>Student ID: {user.studentId}</Text>
            <Text style={styles.info}>Email: {user.email}</Text>

            <View>
                <Button
                    onPress={handleLogout}
                    status="danger"
                    style={{ marginTop: 20 }}
                >
                    Log Out
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: 20,
        alignItems: "center",
    },
    title: {
        marginBottom: 20,
    },
    info: {
        marginBottom: 10,
        fontWeight: "bold",
    },
});

export default ProfileScreen;
