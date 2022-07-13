import React, { Component } from "react";
import "./App.css";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const parsedObj = JSON.parse(localStorage.getItem('contacts'));
    console.log(parsedObj);
    // const parsedContacts = parsedObj.contacts;

    if (parsedObj) {
     this.setState({contacts: parsedObj});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContacts = text => {
    const {contacts} = this.state;
    const contactsNames = contacts.find(
      el => (el.name.toLowerCase()===text.name.toLowerCase())
      );

    if (contactsNames) {    
      return alert('This contact already exist');
    };
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, text]
    }));
  }

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id)
    }))
  }

  changeFilter = ({currentTarget: {value}}) => {
    this.setState({filter: value.trim()})
  }

  getFilteredContacts = () => {
    const {filter} = this.state;
    return (this.state.contacts.filter(contact => contact.name.includes(filter)));
  }

  render() {
    const {filter} = this.state;
    const filteredContacts = this.getFilteredContacts();
    
  return (
      <div className="App">
        <h2>Phonebook </h2>
        <ContactForm onSubmit={this.addContacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList data={filteredContacts} onDeleteContact={this.deleteContacts} />
      </div>
    )
  }
}

export default App;