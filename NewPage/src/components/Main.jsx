import react from "react";
import {Text, View } from 'react-native';
import Constants from 'expo-constants'; 

const Main = () => {
    return (
        <View
        style={{ flex: 1, marginTop: Constants.statusBarHeight, marginLeft: 5 }}>
            <Text>Rate Repository Application</Text>
        </View>
    )      
}

export default Main;