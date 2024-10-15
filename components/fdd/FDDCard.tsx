import {Image, StyleSheet, View, ViewStyle} from "react-native";
import {Card} from "@/components/Card";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";

type Props = {
    style?: ViewStyle,
    id: number,
    nameFr: string,
    image: string,
}

 export function FDDCard ({style, id, nameFr, image}: Props){
    const colors = useThemeColors()
    return <Card style={[style, styles.card]}>
        <ThemedText style={styles.idFDD} variant="caption" color="grayMedium">#{id.toString().padStart(3, '0')}</ThemedText>
        <Image
            style={styles.imageFDD}
            source={{uri:`${image}`}}
        />
        <ThemedText>{nameFr}</ThemedText>
        <View style={[styles.shadow, {backgroundColor: colors.grayBackground}]}/>
    </Card>
}

const styles = StyleSheet.create({
    imageFDD: {
        width: 72,
        height: 72,
    },
    card: {
        position: "relative",
        alignItems: 'center',
        padding: 4,
    },
    idFDD: {
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