// 세팅하기
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    // API 있는 위치를 모든 페이지에 알려주기 위해 세팅
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />  
    </ApolloProvider>
  ) 
}
