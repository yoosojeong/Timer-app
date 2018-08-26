import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from "../Button";

class Timer extends Component{
    render(){

        //console.log(this.props);

        const { isPlaying, elapsedTime, timeDuration } = this.props
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.uppesr}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    { !isPlaying ? (
                        < Button iconName="play-circle" onPress={() => alert("It's works")} />
                        ) : null } 
                    { isPlaying ? ( 
                        <Button iconName="stop-circle" onPress={() => alert("It's works")} />
                     ) : null }  
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
});

// isPlaying == 거짓 : 아이콘 
// { !isPlaying && (< Button iconName="play-circle" onPress={() => alert("It's works")} />)} 
export default Timer;