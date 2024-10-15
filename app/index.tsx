import {ActivityIndicator, FlatList, Image, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Card} from "@/components/Card";
import {PokemonCard} from "@/components/pokemon/PokemonCard";
import {useFetchQuery, useInfiniteFetchQuery} from "@/hooks/useFetchQuery";
import {getPokemonId} from "@/functions/pokemon";
import {SearchBar} from "@/components/SearchBar";
import {useState} from "react";
import {Row} from "@/components/Row";

export default function Index() {
      const colors = useThemeColors()
      const {data, isFetching, fetchNextPage} = useInfiniteFetchQuery('/pokemon?limit=21')
      const pokemons = data?.pages.flatMap(page => page.results) ?? []
      const [search,setSearch] = useState('')
      const filteredPokemons = search ? pokemons.filter(p => p.name.includes(search.toLowerCase()) || getPokemonId(p.url).toString() == search) : pokemons
    return (
        <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
            <Row style={styles.header} gap={16}>
                <Image style={styles.tinyLogo} source={require("@/assets/images/pokeball.png")}/>
                <ThemedText variant="headline" color="grayWhite">Pokédex</ThemedText>
            </Row>
            <Row>
                <SearchBar value={search} onChange={setSearch}/>
            </Row>
            <Card style={styles.body}>
                <FlatList
                    data={filteredPokemons}
                    numColumns={3}
                    contentContainerStyle={[styles.gridGap, styles.list]}
                    columnWrapperStyle={styles.gridGap}
                    ListFooterComponent={
                        isFetching ? <ActivityIndicator color={colors.tint}/> : null
                    }
                    onEndReached={search ? undefined : () => fetchNextPage()}
                    renderItem={({item}) => <PokemonCard id={getPokemonId(item.url)} name={item.name} style={{flex: 1/3}}/>}
                    keyExtractor={(item) => item.url}/>
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
        width:30,
        height:30
    },
    header: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    body: {
        flex: 1,
        marginTop: 24
    },
    gridGap:{
        gap: 8,
    },
    list:{
        paddingTop: 24,
        padding: 12,
    }
})