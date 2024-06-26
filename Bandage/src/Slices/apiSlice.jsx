import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }), 
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'products',
    }),

  }),
}); 

export const { useGetPostsQuery } = apiSlice;