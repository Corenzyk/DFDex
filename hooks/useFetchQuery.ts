import {useQuery} from "@tanstack/react-query";

const endpoint= "../database/fruit_du_demon.json"

export function useFetchQuery(url: string) {
    return useQuery({
        queryKey: [url],
        queryFn: async() => {
            await wait(1)
            return fetch(url).then(r => r.json())
        }
    })
}

function wait (duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration * 1000))
}