import {createApi} from '@reduxjs/toolkit/query/react'
import {getProduct, getProducts, getSizes} from '../services/api'

export const productsApi = createApi({
  reducerPath: 'products',
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: () => getProducts().then(r => ({ data: r })),
    }),
    getProduct: builder.query({
      queryFn: (id) => getProduct(id).then(r => ({ data: r })),
    }),
    getSizes: builder.query({
      queryFn: () => getSizes().then(r => ({ data: r })),
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery, useGetSizesQuery } = productsApi