// import { createSlice } from '@reduxjs/toolkit';

// const defaultContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'id-5', name: 'Sergey Mentor 2', number: '666-66-66' },
// ];

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: defaultContacts,
//     filter: '',
//   },
//   reducers: {
//     addContact(state, { payload }) {
//       state.items.push(payload);
//     },

//     deleteContact(state, { payload }) {
//       state.items = state.items.filter(contact => contact.id !== payload);
//     },

//     setFilter(state, { payload }) {
//       state.filter = payload;
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

// export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

//?----------------------------------------------------------------------------------------------

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://632e9affb7314fc02f4726f1.mockapi.io/api/dankozz1/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: contactContent => ({
        url: '/contacts',
        method: 'POST',
        body: contactContent,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsAPI;
