import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./contacts-action";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const addContact = (value) => (dipatch) => {
  const { name, number } = value;
  const contact = {
    name,
    number,
  };
  dipatch(addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => {
      dipatch(addContactSuccess(data));
    })
    .catch((error) => {
      dipatch(addContactError(error));
    });
};
export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch((error) => dispatch(deleteContactError(error)));
};
export const fetchContacts = () => (dipatch) => {
  dipatch(fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dipatch(fetchContactSuccess(data)))
    .catch((error) => dipatch(fetchContactError(error)));
};
