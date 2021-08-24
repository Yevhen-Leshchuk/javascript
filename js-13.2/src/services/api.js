/* eslint-disable import/no-anonymous-default-export */
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjYzMzODM5MDYxMTAwMTdhZmY4ZWQiLCJpYXQiOjE2MTc3NDA2MDB9.7ON4QNXcpzUEe9wl6jlapG27-IanG_9R_bQ5D0WSMhg";

const baseUrl = "https://goit-phonebook-api.herokuapp.com";

const headers = {
  Authorization: `Bearer ${token}`,
};

// const fetchContacts = () => {
//   return fetch(`${baseUrl}/contacts`, {
//     headers,
//   }).then((res) => res.json());
// };

// или:
const fetchContacts = async () => {
  // try catch - здесь не обязательный, так как ошибку отловит try catch в componentDidMount()

  // try {
  //   // throw "Все сломалось! 💩";
  //   const response = await fetch(`${baseUrl}/contacts`, {
  //     headers,
  //   });
  //   const contacts = response.json();
  //   return contacts;
  // } catch (error) {
  //   console.log("Словили ошибку в catch внутри fetchContacts");
  //   throw error;
  // }

  const response = await fetch(`${baseUrl}/contacts`, {
    headers,
  });
  const contacts = response.json();
  return contacts;
};

// const createContact = (name, number) => {
//   const options = {
//     method: "POST",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, number }),
//   };

//   return fetch(`${baseUrl}/contacts`, options).then((res) => res.json());
// };

// или:
const createContact = async (name, number) => {
  // try catch - здесь не обязательный, так как ошибку отловит try catch в addContact

  const options = {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, number }),
  };

  // try {
  //   const response = await fetch(`${baseUrl}/contacts`, options);
  //   const data = response.json();

  //   return data;
  // } catch (error) {
  //   throw error;
  // }

  const response = await fetch(`${baseUrl}/contacts`, options);
  const data = response.json();

  return data;
};

// const deleteContact = (id) => {
//   const options = {
//     method: "DELETE",
//     headers,
//   };

//   return fetch(`${baseUrl}/contacts/${id}`, options).then((res) => res.json());
// };

// или:
const deleteContact = async (id) => {
  // try catch - здесь не обязательный, так как ошибку отловит try catch в removeContact

  const options = {
    method: "DELETE",
    headers,
  };

  // try {
  //   const response = await fetch(`${baseUrl}/contacts/${id}`, options);
  //   const data = response.json();

  //   return data;
  // } catch (error) {
  //   throw error;
  // }

  const response = await fetch(`${baseUrl}/contacts/${id}`, options);
  const data = response.json();

  return data;
};

// const updateContact = (id, fields) => {
//   const options = {
//     method: "PATCH",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(fields),
//   };

//   return fetch(`${baseUrl}/contacts/${id}`, options).then((res) => res.json());
// };

// или:
const updateContact = async (id, fields) => {
  const options = {
    method: "PATCH",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  };

  // try {
  //   const response = await fetch(`${baseUrl}/contacts/${id}`, options);
  //   const data = response.json();

  //   return data;
  // } catch (error) {
  //   throw error;
  // }

  const response = await fetch(`${baseUrl}/contacts/${id}`, options);
  const data = response.json();

  return data;
};

export default { fetchContacts, createContact, deleteContact, updateContact };
