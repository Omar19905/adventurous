import '../styles/globals.css'
import {ChakraProvider,extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        g:{
            1: "#3e4d3a",
            2:"#b2ab37",
            bg:"#fef4e5",
        }
    }
})
function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
