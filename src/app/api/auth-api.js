import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/auth/v1/`,
    prepareHeaders: (headers) => {
      // headers.set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('token'))}`);
      headers.set('Accept', 'application/json');
      return headers;
    }
  }),
  tagTypes: ['AuthApi'],
  endpoints(builder) {
    return {
      auth: builder.mutation({
        query: ({url, body}) => ({
          url,
          method: 'POST',
          body
        }),
        invalidatesTags: ['AuthApi']
      })
    }
  }
})

export const {
  useAuthMutation
} = authApi;