/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjYzMzODM5MDYxMTAwMTdhZmY4ZWQiLCJpYXQiOjE2MTc3NDA2MDB9.7ON4QNXcpzUEe9wl6jlapG27-IanG_9R_bQ5D0WSMhg";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const fetchContacts = async () => {
  const { data } = await axios.get("/contacts");
  return data;
};

const createContact = async (name, number) => {
  const { data } = await axios.post("/contacts", { name, number });
  return data;
};

const deleteContact = async (id) => {
  await axios.delete(`/contacts/${id}`);
};

const updateContact = async (id, fields) => {
  const { data } = axios.patch(`/contacts/${id}`, fields);
  return data;
};

export default { fetchContacts, createContact, deleteContact, updateContact };
