import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Card} from "@/components/Card";
import {FDDCard} from "@/components/fdd/FDDCard";
import {useFetchQuery} from "@/hooks/useFetchQuery";

export default function Index() {
      const colors = useThemeColors()
      const {data} = useFetchQuery('https://raw.githubusercontent.com/Corenzyk/FDDex_Database/refs/heads/main/fruit_du_demon.json')
      const fdd = data?.results ?? []
    return (
        <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
            <View style={styles.header}>
                <Image style={styles.tinyLogo} source={require("@/assets/images/coffre.png")}/>
                <ThemedText variant="headline" color="grayWhite">FDDex</ThemedText>
            </View>
            <Card style={styles.body}>
                <FlatList
                    data={fdd}
                    numColumns={3}
                    contentContainerStyle={[styles.gridGap, styles.list]}
                    columnWrapperStyle={styles.gridGap}
                    renderItem={({item}) => <FDDCard id={item.id} nameFr={item.name} image={item.image} style={{flex: 1/3}}/>}
                    keyExtractor={(item) => item.id.toString()}/>
            </Card>
        </SafeAreaView>
    );
}

// Variable constante style pour référencer dans le constructeur
const styles = StyleSheet.create({ // StyleSheet.create propose de l'auto-complétion de css
    container:{
        flex: 1,
        padding: 4,
    },
    tinyLogo:{
        width:50,
        height:50
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        padding: 12,
    },
    body: {
        flex: 1,
    },
    gridGap:{
        gap: 8,
    },
    list:{
        paddingTop: 24,
        padding: 12,
    }
})