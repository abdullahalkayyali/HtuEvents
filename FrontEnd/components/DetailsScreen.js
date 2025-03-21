import React from "react";
import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Text, Button } from "@ui-kitten/components";

const DetailsScreen = ({ navigation, route }) => {
    const { event, category } = route.params;
    const description =
        "This event offers a great opportunity to engage, learn, and connect with peers. Don’t miss out!";
    const [rsvps, setRsvps] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text category="h2" style={styles.detailsTitle}>
                    {event.title}
                </Text>
                <Text
                    category="h5"
                    style={[styles.detailsText, { color: "#EA383E" }]}
                >
                    {event.clubName}
                </Text>
                <Text category="s1" style={styles.detailsText}>
                    {category}
                </Text>
                <Text category="h6" style={styles.detailsText}>
                    {event.date}
                </Text>
                <Text category="h6" style={styles.detailsText}>
                    {event.time}
                </Text>
                <Text
                    category="h5"
                    status="info"
                    style={[styles.detailsText, { paddingTop: 10 }]}
                >
                    Location:
                </Text>
                <Text
                    category="s1"
                    style={[
                        styles.detailsText,
                        { fontWeight: "bold", fontSize: 18 },
                    ]}
                >
                    {event.location}
                </Text>
                <Text category="s1" style={styles.detailsText}>
                    {description}
                </Text>
                <Text
                    category="h6"
                    status="info"
                    style={[styles.detailsText, { marginTop: 20 }]}
                >
                    Number of RSVPs: {rsvps}
                </Text>
                <TouchableOpacity
                    style={styles.rsvpButton}
                    onPress={() => {
                        setRsvps(rsvps + 1);
                        Alert.alert("RSVP Submitted!");
                    }}
                >
                    <Text style={styles.buttonText}>RSVP</Text>
                </TouchableOpacity>
            </View>
            <Button onPress={() => navigation.goBack()}>Back</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 10,
    },
    card: {
        paddingHorizontal: 20,
        paddingVertical: 35,
        flex: 1,
        marginVertical: "30%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#ccc",
        borderRadius: 15,
        borderColor: "#aaa",
        borderWidth: 3,
    },
    detailsTitle: {
        marginBottom: 15,
    },
    detailsText: {
        marginBottom: 10,
    },
    rsvpButton: {
        marginTop: 10,
        backgroundColor: "#28a745",
        padding: 12,
        borderRadius: 5,
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
});

export default DetailsScreen;
