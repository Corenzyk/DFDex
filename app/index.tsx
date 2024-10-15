import { Text,View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.contrainer}>
            <Text>Edit app/index.tsx to edit this screen.</Text>
        </View>
    );
}

// Variable constante style pour référencer dans le constructeur
const styles = StyleSheet.create({ // StyleSheet.create propose de l'auto-complétion de css
    contrainer:{backgroundColor:'blue',padding:10,}
})