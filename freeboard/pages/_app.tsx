import { AppProps } from 'next/app'
import '../styles/globals.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

export default function App({ Component }: AppProps) {

  const client = new ApolloClient({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return(
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  ) 
}
