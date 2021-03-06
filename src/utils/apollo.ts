import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { Session } from 'next-auth/client'
import { setContext } from '@apollo/client/link/context'
import { useMemo } from 'react'
import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })

  const authLink = setContext((_, { headers }) => {
    const authorization = session?.jwt ? `Bearer ${session?.jwt}` : ''
    return {
      headers: {
        ...headers,
        authorization
      }
    }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: apolloCache
  })
}

export function initializeApollo(
  initialState = null,
  session?: Session | null
) {
  const apolloCLientGlobal = apolloClient ?? createApolloClient(session)

  if (initialState) {
    apolloCLientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return apolloCLientGlobal

  apolloClient = apolloClient ?? apolloCLientGlobal

  return apolloClient
}

export function useApollo(initialState = null, session?: Session) {
  const store = useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session]
  )
  return store
}
