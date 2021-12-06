import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  getContactFromForm = contact => {
    const { contacts } = this.state;
    this.setState({ contacts: [contact, ...contacts] });
  };

  findName = event => {
    this.setState({ filter: event.target.value });
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(obj =>
      obj.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredContacts;
  };

  deleteContact = id => {
    const { contacts } = this.state;

    this.setState({ contacts: contacts.filter(obj => obj.id !== id) });
  };

  render() {
    const { filter } = this.state;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm submitContact={this.getContactFromForm} />
        <h2>Contacts</h2>
        <Filter filter={filter} findName={this.findName} />
        <ContactList
          showFilteredContacts={this.showFilteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
