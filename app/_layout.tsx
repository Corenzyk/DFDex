import { Stack } from 'expo-router';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function RootLayout() {
  return(
      <QueryClientProvider client={queryClient}>
          <Stack
              screenOptions={{
                  headerShown: false
              }}
          />
      </QueryClientProvider>
  )
}

