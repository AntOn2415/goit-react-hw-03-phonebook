import React, { Component } from 'react';
import ContactList from '../ContactLists';
import ContactForm from '../ContactForms';
import Filter from '../Filters';
import { ContainerDiv, TitleH1, TitleH2 } from './App.styled';


class App extends Component {
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
      <ContainerDiv>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm onAddContact={this.addContact} />

        <TitleH2>Contacts</TitleH2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={filterContact}
          onDeleteContact={this.deleteContact}
        />
      </ContainerDiv>
    );
  }
}

export default App;