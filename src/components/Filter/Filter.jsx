// import React, { useState } from 'react';

// import { useFetchContactsQuery } from '../../redux/contactsSlice';

// export function Filter() {
//   const [name, setName] = useState('');

//   const { data: contacts, isFetchingAll } = useFetchContactsQuery();

//   const handleFilterChange = e => {
//     setName(e.target.value);

//     const filteredContacts = contacts.filter(elem => elem.name.includes(name));
//     console.log(filteredContacts);
//   };

//   return (
//     <div>
//       <form action="">
//         <label>
//           Find contacts by name
//           <input
//             onChange={handleFilterChange}
//             value={name}
//             type="text"
//             name="filter"
//             title="Find contacts by name"
//           />
//         </label>
//       </form>
//     </div>
//   );
// }

import React from 'react';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export function Filter() {
  const filter = useSelector(getFilter, shallowEqual);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <input
          onChange={handleFilterChange}
          value={filter}
          type="text"
          name="filter"
          title="Find contacts by name"
        />
      </label>
    </div>
  );
}
