import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const dynamicBaseQuery = async function (args, WebApi, extraOptions) {
    const baseUrl = 'https://api.spotify.com/v1/'; //need to change
    const prepareHeaders = async (headers) => {
        headers.set('accept', '*/*')
        return headers
    }
    const rawBaseQuery = fetchBaseQuery({ baseUrl, prepareHeaders });
    return rawBaseQuery(args, WebApi, extraOptions);
};

export const Api = createApi({

    baseQuery: dynamicBaseQuery,
    endpoints: () => ({}),
    reducerPath: 'api',
    tagTypes: ['Portfolio'],

})