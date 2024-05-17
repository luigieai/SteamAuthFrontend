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

const getTotpCode = async (accountName: string) => {
  const url = `SteamAccounts/${accountName}/code`

  return await get<string>(url).then(({ data }) => data)
}

const useGetAllAccounts = () => {
  return useQuery({
    queryKey: ['fetchBuilds'],
    queryFn: async () => getAllAccounts(),
  })
}

const useGetTotpCode = (accountName: string, enabled = true) => {
  return useQuery({
    queryKey: ['fetchTotp', accountName],
    queryFn: async () => getTotpCode(accountName),
    enabled: enabled,
  })
}

// const fetchBuildsLoader = () => {
//   return queryClient.fetchQuery({
//     queryKey: ['fetchBuilds'],
//     queryFn: () => fetchBuilds(),
//   })
// }

export { useGetAllAccounts, useGetTotpCode }
