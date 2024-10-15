import {StyleSheet, TextInput, Image} from "react-native";
import {Row} from "@/components/Row";
import {useThemeColors} from "@/hooks/useThemeColors";

type Props = {
    value: string,
    onChange: (s: string) => void
}

export function SearchBar({value, onChange}: Props) {
    const colors=useThemeColors()
    return (
        <Row
            gap={8}
            style={[styles.wrapper, {backgroundColor: colors.grayWhite}]}
        >
            <Image style={styles.imageSearch} source={require("@/assets/images/search.png")}/>
            <TextInput onChangeText={onChange} value={value}/>
        </Row>
    );
}

const styles = StyleSheet.create({
    wrapper :{
        flex: 1,
        borderRadius: 16,
        height: 32,
        paddingHorizontal: 12,
    },
    imageSearch:{
        width:16,
        height:16,
    },
    input:{
        flex: 1,
        height: 16,
        fontSize: 10,
        lineHeight: 16,
    }
})