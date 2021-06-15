/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from "@reduxjs/toolkit";
const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;

const getFilteredContact = createSelector(
  [getContacts, getFilter],
  (contactsList, query) => {
    return contactsList.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }
);

export default { getContacts, getFilter, getFilteredContact };
