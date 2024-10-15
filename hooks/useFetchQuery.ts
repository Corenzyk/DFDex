import {useInfiniteQuery, useQuery} from "@tanstack/react-query";

const endpoint = "https://pokeapi.co/api/v2"

type API = {
    '/pokemon?limit=21': {
        count: number,
        next: string | null,
        results: {name: string, url: string}[]
    }
}

export function useFetchQuery<T extends keyof API>(url: string) {
    return useQuery({
        queryKey: [url],
        queryFn: async() => {
            await wait(1)
            return fetch(endpoint + url, {
                headers: {
                    Accept: 'application/json'
                }
            }).then(r => r.json() as Promise<API[T]>)
        }
    })
}

export function useInfiniteFetchQuery<T extends keyof API>(url: string){
    return useInfiniteQuery({
        queryKey: [url],
        initialPageParam: endpoint + url,
        queryFn: async({pageParam}) => {
            await wait(1)
            return fetch(pageParam, {
                headers: {
                    Accept: 'application/json'
                }
            }).then(r => r.json() as Promise<API[T]>)
        },
        getNextPageParam: (lastPage) => {
            if ('next' in lastPage) {
                return lastPage.next
            }
            return null
        }
    })
}

function wait (duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration * 1000))
}