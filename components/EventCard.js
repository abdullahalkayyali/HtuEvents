import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card, Text, Button } from "@ui-kitten/components";

const EventCard = ({ event, onPress }) => {
    return (
        <View style={styles.card}>
            <Card style={[styles.card, { borderColor: "transparent" }]}>
                <Image
                    source={
                        typeof event.image === "number"
                            ? event.image
                            : { uri: event.image }
                    }
                    style={styles.image}
                />
                <Text category="h4" style={styles.title}>
                    {event.title}
                </Text>
                <Text category="h6" style={styles.text}>
                    {event.clubName}
                </Text>
                <Text category="s1" status="info" style={styles.text}>
                    {event.date}
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
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        color: "#EA383E",
        paddingBottom: 20,
        textAlign: "center",
    },
    card: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "transparent",
        height: 600,
        borderColor: "#EA383E",
        borderWidth: 3,
        borderRadius: 10,
    },
    text: {
        marginBottom: 8,
        textAlign: "center",
    },
    button: {
        marginTop: 10,
        backgroundColor: "#EA383E",
        borderColor: "transparent",
        paddingVertical: 5,
        paddingHorizontal: 10,
        height: 35,
        width: "100%",
        alignSelf: "center",
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 370,
        resizeMode: "cover",
        borderRadius: 20,
    },
});

export default EventCard;
