import { ItemProps } from 'components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const type = item?.type
    obj[key] =
      type !== 'checkbox'
        ? queryString[key]
        : { name_contains: queryString[key] }
  })

  return obj
}
