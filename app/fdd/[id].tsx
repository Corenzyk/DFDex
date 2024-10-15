import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function About(){
    const params = useLocalSearchParams()
    return <View>
        <Text>{params.name}</Text>
    </View>
}