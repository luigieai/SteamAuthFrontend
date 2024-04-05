import axios, { type AxiosError, type AxiosInstance, AxiosRequestConfig } from 'axios'

import { AuthUser } from '@/hooks'

type RequestUrl = string
type RequestBody = unknown
type RequestParams = Omit<AxiosRequestConfig, `baseURL` | `url` | `method`>
type RequestResponse = unknown

// axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// interceptor - REQUEST
axiosInstance.interceptors.request.use(
  (req) => {
    const token = AuthUser()?.access_token
    req.headers.set('Authorization', `Bearer ${token}`)
    return req
  },
  (error) => {
    // your requests error logic here

    return Promise.reject(error)
  },
)

// interceptor - RESPONSE
axiosInstance.interceptors.response.use(
  (res) => {
    // your interceptors logic here to get on protected routes

    return res
  },
  (error: AxiosError) => {
    // your responses error logic here

    return Promise.reject(error)
  },
)

const get = <TypedResponse = RequestResponse>(url: RequestUrl, params?: RequestParams) => {
  return axiosInstance.get<TypedResponse>(url, params)
}

const post = <TypedResponse = RequestResponse, RequestData = RequestBody>(
  url: RequestUrl,
  data: RequestData,
  params?: RequestParams,
) => {
  return axiosInstance.post<TypedResponse>(url, data, params)
}

const put = <TypedResponse = RequestResponse, RequestData = RequestBody>(
  url: RequestUrl,
  data: RequestData,
  params?: RequestParams,
) => {
  return axiosInstance.put<TypedResponse>(url, data, params)
}

const patch = <TypedResponse = RequestResponse, RequestData = RequestBody>(
  url: RequestUrl,
  data: RequestData,
  params?: RequestParams,
) => {
  return axiosInstance.patch<TypedResponse>(url, data, params)
}

// Delete is shortened here 'cuz is a reserved word in TS
const del = <TypedResponse = RequestResponse>(url: RequestUrl, params?: RequestParams) => {
  return axiosInstance.delete<TypedResponse>(url, params)
}

const ServerError = ({ response }: AxiosError): boolean => {
  if (response && response.status === 403) {
    return true
  }

  if (response && response.status >= 500) {
    return true
  }

  return false
}

export {
  axios,
  get,
  post,
  put,
  patch,
  del,
  ServerError,
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type RequestParams,
}
