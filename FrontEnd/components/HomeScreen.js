import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text, Button } from "@ui-kitten/components";
import EventCard from "./EventCard";
import { useEvents } from "./Events";

const HomeScreen = ({ navigation }) => {
    const { events } = useEvents();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Text category="h1" style={styles.header}>
                    Volunteering
                </Text>
                {events.volunteering.map((event) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onPress={() =>
                            navigation.navigate("Details", {
                                event,
                                category: "Volunteering",
                            })
                        }
                    />
                ))}
            </View>

            <View style={styles.container}>
                <Text category="h1" style={styles.header}>
                    Clubs
                </Text>
                {events.clubs.map((event) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onPress={() =>
                            navigation.navigate("Details", {
                                event,
                                category: "Clubs",
                            })
                        }
                    />
                ))}
            </View>

            <View style={styles.container}>
                <Text category="h1" style={styles.header}>
                    HTU Events
                </Text>
                {events.htuEvents.map((event) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onPress={() =>
                            navigation.navigate("Details", {
                                event,
                                category: "HTU Events",
                            })
                        }
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        gap: 20,
        backgroundColor: "white",
    },
    header: {
        textAlign: "center",
        marginTop: 40,
    },
});

export default HomeScreen;
