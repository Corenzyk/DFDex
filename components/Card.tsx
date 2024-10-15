import {View, type ViewProps, ViewStyle} from "react-native";
import {Shadows} from "@/constants/Shadows";
import {useThemeColors} from "@/hooks/useThemeColors";

type Props = ViewProps

export function Card({style, ...rest}: Props){
    const colors = useThemeColors()
    return <View style={[style, styles, {backgroundColor: colors.grayWhite}]} {...rest}/>
}

const styles={
    borderRadius:8,
    overflow: "hidden",
    ...Shadows.dp2
} satisfies ViewStyle //Vérifie si le contenu de styles correspond à ce qu'il pourrait y avoir dans les styles d'une vue