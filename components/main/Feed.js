import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Feed() {
    return (
        <View style={styles.container}>
            <Text>Feed</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});