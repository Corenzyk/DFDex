import {Image, Pressable, StyleSheet, View, ViewStyle} from "react-native";
import {Card} from "@/components/Card";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Link} from "expo-router";

type Props = {
    style?: ViewStyle,
    id: number,
    name: string,
}

 export function PokemonCard ({style, id, name}: Props){
    const colors = useThemeColors()
    return <Link href={{pathname: "/pokemon/[id]", params: {id: id}}} asChild>
        <Pressable android_ripple={{color: colors.tint, foreground: true}} style={style}>
            <Card style={styles.card}>
                <ThemedText style={styles.idPoke} variant="caption" color="grayMedium">#{id.toString().padStart(3, '0')}</ThemedText>
                <Image
                    style={styles.imagePoke}
                    source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
                />
                <ThemedText>{name}</ThemedText>
                <View style={[styles.shadow, {backgroundColor: colors.grayBackground}]}/>
            </Card>
        </Pressable>
    </Link>
}

const styles = StyleSheet.create({
    imagePoke: {
        width: 72,
        height: 72,
    },
    card: {
        position: "relative",
        alignItems: 'center',
        padding: 4,
    },
    idPoke: {
        alignSelf: 'flex-end',
    },
    shadow: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        borderRadius: 7,
        zIndex: -1,
    }
})