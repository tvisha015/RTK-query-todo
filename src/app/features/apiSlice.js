import {createApi} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fatchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder)=>({
        getTasks: builder.query({
            query: ()=>"/tasks"
        })
    })
})

export const {useGetTasksQuery} = api;