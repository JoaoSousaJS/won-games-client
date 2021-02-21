import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'
import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql'
    }),
    cache: apolloCache
  })
}

export function initializeApollo(initialState = {}) {
  const apolloCLientGlobal = apolloClient ?? createApolloClient()

  if (initialState) {
    apolloCLientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return apolloCLientGlobal

  apolloClient = apolloClient ?? apolloCLientGlobal

  return apolloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
