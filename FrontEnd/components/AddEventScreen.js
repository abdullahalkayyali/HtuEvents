import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";
import { Text, Input, Button } from "@ui-kitten/components";
import { useEvents } from "./Events";

const AddEventScreen = ({ navigation }) => {
    const { addEvent } = useEvents();
    const [title, setTitle] = useState("");
    const [club, setClub] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [eventLocation, setEventLocation] = useState("");

    const handlePress = () => {
        if (!title || !club || !date || !time || !eventLocation) {
            Alert.alert("All values must be filled out");
            return;
        }

        const newEvent = {
            id: Date.now().toString(),
            title,
            clubName: club,
            date,
            time,
            location: eventLocation,
        };

        addEvent("clubs", newEvent);
        navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text
                    category="h1"
                    style={{ alignSelf: "center", marginBottom: 30 }}
                >
                    New Event
                </Text>

                <Text category="h4">Title</Text>
                <Input
                    placeholder="Event Title"
                    value={title}
                    onChangeText={setTitle}
                />

                <Text category="h4">Club</Text>
                <Input
                    placeholder="Club Name"
                    value={club}
                    onChangeText={setClub}
                />

                <Text category="h4">Date</Text>
                <Input placeholder="Date" value={date} onChangeText={setDate} />

                <Text category="h4">Time</Text>
                <Input placeholder="Time" value={time} onChangeText={setTime} />

                <Text category="h4">Location</Text>
                <Input
                    placeholder="Location"
                    value={eventLocation}
                    onChangeText={setEventLocation}
                />

                <Button status="success" onPress={handlePress}>
                    Add Event
                </Button>
                <Button status="danger" onPress={() => navigation.goBack()}>
                    Back
                </Button>
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
});

export default AddEventScreen;
