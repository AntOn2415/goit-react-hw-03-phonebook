import React, { Component } from 'react';
import ContactList from './contactList';
import ContactForm from './contactForm';
import Filter from './filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const  contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

if(parsedContacts) {
this.setState({contacts: parsedContacts});
}
  };
  
  componentDidUpdate (prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts) )
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const suchNameExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (suchNameExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filterContact = this.getFilterContact();

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={filterContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
