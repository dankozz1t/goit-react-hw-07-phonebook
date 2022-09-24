export const getFilter = state => state.filter.filter;

// TODO: How make selector with async API code (Filtered Contacts or contacts (contactsSlice))

// import { createSelector } from '@reduxjs/toolkit';

// export const getContacts = state =>
//   state.contactsAPI.queries['fetchContacts(undefined)'].data; // wtf??))

// const getFilteredContacts2 = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase().trim())
//     );
//   }
// );

// export const getFilteredContacts = state => {
//   console.log(state);
//   if (!state) {
//     return;
//   }
//   const filter = getFilter(state);
//   const contacts = getContacts(state);

//   // console.log(state.contactsAPI.queries['fetchContacts(undefined)'].data);

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase().trim())
//   );
// };
