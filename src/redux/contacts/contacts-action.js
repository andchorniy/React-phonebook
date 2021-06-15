import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction(
  "phonebook/FetchContactRequest"
);
export const fetchContactSuccess = createAction(
  "phonebook/FetchContactSuccess"
);
export const fetchContactError = createAction("phonebook/FetchContactError");

export const addContactRequest = createAction("phonebook/AddContactRequest");
export const addContactSuccess = createAction("phonebook/AddContactSuccess");
export const addContactError = createAction("phonebook/AddContactError");

export const deleteContactRequest = createAction(
  "phonebook/DeleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "phonebook/DeleteContactSuccess"
);
export const deleteContactError = createAction("phonebook/DeleteContactError");
