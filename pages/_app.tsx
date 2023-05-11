// 모든 파일 공통 세팅하기
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { AppProps } from 'next/app'

export default function App({ Component }: AppProps) {

  // graphql 세팅
  const client = new ApolloClient({
    // API 있는 위치를 모든 페이지에 알려주기 위해 세팅
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()  // 나중에 꺼내서 쓰기 위해 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장
  })

  return(
    <div>
      <div>=======여기는 _app.js 컴포넌트 시작 부분입니다.==========</div>
      {/* ApolloProvider -> 이 컴포넌트에서 client graphql 세팅을 사용할 수 있게 전달해준다. */}
      <ApolloProvider client={client}>
        {/* 각 페이지 컴포넌트 */}
        <Component />
      </ApolloProvider>
      <div>=======여기는 _app.js 컴포넌트 마지막 부분입니다.==========</div>
    </div>
  ) 
}
