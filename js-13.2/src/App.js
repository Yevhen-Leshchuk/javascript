import React, { Component } from "react";
import ContactList from "./components/contact-list";
import ContactEditor from "./components/contact-editor";
// import api from "./services/api";
import api from "./services/api-axios";
// import "./async-await";
import "./App.css";

export default class App extends Component {
  state = {
    contacts: [],
  };

  // componentDidMount() {
  //   api
  //     .fetchContacts()
  //     .then((contacts) => this.setState({ contacts }))
  //     .catch((error) => console.log(error));
  // }

  // или:
  async componentDidMount() {
    try {
      const contacts = await api.fetchContacts();

      this.setState({ contacts });
    } catch (error) {
      console.log("Лог ошибки в componentDidMount: " + error); // ошибка throw
    }
  }

  // addContact = (name, number) => {
  //   api
  //     .createContact(name, number)
  //     .then((contact) =>
  //       this.setState((state) => ({ contacts: [contact, ...state.contacts] }))
  //     )
  //     .catch((error) => console.log(error));
  // };

  // или:
  addContact = async (name, number) => {
    try {
      const contact = await api.createContact(name, number);
      this.setState((state) => ({ contacts: [contact, ...state.contacts] }));
    } catch (error) {
      console.log(error);
    }
  };

  // removeContact = (id) => {
  //   api
  //     .deleteContact(id)
  //     .then(() =>
  //       this.setState((state) => ({
  //         contacts: state.contacts.filter((contact) => contact.id !== id),
  //       }))
  //     )
  //     .catch((error) => console.log(error));
  // };

  // или:
  removeContact = async (id) => {
    try {
      await api.deleteContact(id);

      this.setState((state) => ({
        contacts: state.contacts.filter((contact) => contact.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <ContactEditor onSubmit={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}
