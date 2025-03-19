import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Text, Button } from "@ui-kitten/components";

const EventCard = ({ event, onPress }) => {
    return (
        <View style={styles.card}>
            <Card style={[styles.card, { borderColor: "transparent" }]}>
                <Text category="h4" style={styles.title}>
                    {event.title}
                </Text>
                <Text category="h6" style={styles.text}>
                    Club Name: {event.clubName}{" "}
                </Text>
                <Text category="s1" status="info">
                    Date & Day: {event.date}
                </Text>
                <Button style={styles.button} onPress={onPress}>
                    {(evaProps) => (
                        <Text
                            {...evaProps}
                            style={{
                                fontSize: 18,
                                color: "white",
                            }}
                        >
                            View Details
                        </Text>
                    )}
                </Button>
            </Card>
            {/* <Text style={styles.cardTitle}>{event.title}</Text>
            <Text>Club Name: {event.clubName}</Text>
            <Text>Date & Day: {event.date}</Text>
            <Text>Time: {event.time}</Text>
            <Text>Location: {event.location}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: "#EA383E",
        paddingBottom: 10,
    },
    card: {
        flex: 1,
        gap: 10,
        flexDirection: "column",
        backgroundColor: "#ddd",
        padding: 10,
    },
    text: {
        marginBottom: 8,
    },
    button: {
        marginTop: 25,
        backgroundColor: "#EA383E",
        borderColor: "transparent",
        paddingVertical: 5, // Reduce vertical padding
        paddingHorizontal: 10, // Reduce horizontal padding
        height: 35, // Set a smaller height
        width: "100%",
        alignSelf: "center",
    },
});

export default EventCard;
