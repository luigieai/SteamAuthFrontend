import { get, useQuery } from '@/libs'

type SteamAccountsAllDto = {
  username: string
  steamAccounts: SteamAccountDto[]
}

type SteamAccountDto = {
  id: number
  accountName: string
}

const getAllAccounts = async () => {
  const url = 'SteamAccounts'

  return await get<SteamAccountsAllDto>(url).then(({ data }) => data)
}

const useGetAllAccounts = () => {
  return useQuery({
    queryKey: ['fetchBuilds'],
    queryFn: async () => getAllAccounts(),
  })
}

// const fetchBuildsLoader = () => {
//   return queryClient.fetchQuery({
//     queryKey: ['fetchBuilds'],
//     queryFn: () => fetchBuilds(),
//   })
// }

export { useGetAllAccounts }
