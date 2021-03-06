import React, { Component } from "react";
import styles from './ContactForm.module.css';

const { labelStyles } = styles;

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }


    handleInput = (e) => {
        const {name, value} = e.currentTarget;

        return (
            this.setState({ [name]: value.trim(), })
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {

        const {name, number} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label className={labelStyles}>
                Name
                <input
                    value={name}
                    onChange={this.handleInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </label>
                
                <label className={labelStyles}>
                Number
                <input
                    value={number}
                    onChange={this.handleInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                </label>
                
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm