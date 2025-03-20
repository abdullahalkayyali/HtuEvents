import React, { useState, createContext, useContext } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState({
        volunteering: [
            {
                id: "1",
                title: "Community Clean-Up",
                clubName: "Green Volunteers",
                date: "2025-03-15 (Saturday)",
                time: "10:00 AM",
                location: "Main Campus",
                image: require("../images/12.png"),
            },
            {
                id: "2",
                title: "Food Drive",
                clubName: "Helping Hands",
                date: "2025-03-16 (Sunday)",
                time: "2:00 PM",
                location: "Student Center",
                image: require("../images/16.png"),
            },
        ],
        clubs: [
            {
                id: "3",
                title: "Tech Talk",
                clubName: "GDG On Campus HTU",
                date: "2025-03-17 (Monday)",
                time: "4:00 PM",
                location: "Tech Building",
                image: require("../images/3.png"),
            },
            {
                id: "4",
                title: "Art Workshop",
                clubName: "Creative Minds",
                date: "2025-03-18 (Tuesday)",
                time: "6:00 PM",
                location: "Art Studio",
                image: require("../images/36.png"),
            },
        ],
        htuEvents: [
            {
                id: "5",
                title: "University Fair",
                clubName: "HTU Organizers",
                date: "2025-03-19 (Wednesday)",
                time: "1:00 PM",
                location: "Auditorium",
                image: require("../images/32.png"),
            },
            {
                id: "6",
                title: "Open House",
                clubName: "HTU Events",
                date: "2025-03-20 (Thursday)",
                time: "3:00 PM",
                location: "Main Campus",
                image: require("../images/7.png"),
            },
        ],
    });

    const addEvent = (category, event) => {
        setEvents((prevEvents) => ({
            ...prevEvents,
            [category]: [...prevEvents[category], event],
        }));
    };

    return (
        <EventContext.Provider value={{ events, addEvent }}>
            {children}
        </EventContext.Provider>
    );
};
export const useEvents = () => useContext(EventContext);
