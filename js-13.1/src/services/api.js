const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjYzMzODM5MDYxMTAwMTdhZmY4ZWQiLCJpYXQiOjE2MTc3NDA2MDB9.7ON4QNXcpzUEe9wl6jlapG27-IanG_9R_bQ5D0WSMhg";

const baseUrl = "https://goit-phonebook-api.herokuapp.com";

const headers = {
  Authorization: `Bearer ${token}`,
};

const fetchContacts = () => {
  return fetch(`${baseUrl}/contacts`, {
    headers,
  }).then((res) => res.json());
};

const createContact = (name, number) => {
  const options = {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, number }),
  };

  return fetch(`${baseUrl}/contacts`, options).then((res) => res.json());
};

const deleteContact = (id) => {
  const options = {
    method: "DELETE",
    headers,
  };

  return fetch(`${baseUrl}/contacts/${id}`, options).then((res) => res.json());
};

const updateContact = (id, fields) => {
  const options = {
    method: "PATCH",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  };

  return fetch(`${baseUrl}/contacts/${id}`, options).then((res) => res.json());
};

export default { fetchContacts, createContact, deleteContact, updateContact };
