import { ChakraProvider, Container } from "@chakra-ui/react"
import type { AppProps } from "next/app"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container maxWidth={"container.lg"} minH="100vh">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
