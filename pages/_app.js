import '../styles/globals.css'
import {ChakraProvider,extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        g:{
            1: "#1D1D2C",
            2:"#E40C2B",
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
