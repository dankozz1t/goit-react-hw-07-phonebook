// import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.filter.filter;

// export const getContacts = state =>
//   state.contactsAPI.queries['fetchContacts(undefined)'].data;

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
