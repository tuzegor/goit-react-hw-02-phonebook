import React, { Component } from 'react';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  formSubmit = event => {
    event.preventDefault();
    const { contacts, name, number } = this.state;

    const contact = { id: nanoid(), name, number };
    this.setState({ contacts: [contact, ...contacts] });
  };

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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

  deleteContact = () => {
    const { contacts } = this.state;
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.formSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.inputChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.inputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <label>
          Find contacts by name
          <input type="text" value={filter} onChange={this.findName} />
        </label>
        <ul>
          {this.showFilteredContacts().map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button type="button">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
