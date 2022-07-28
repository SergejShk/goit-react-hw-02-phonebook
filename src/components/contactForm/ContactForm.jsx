import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const initialState = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ name: name, number: number, id: nanoid() });
    this.reset();
  };

  reset = () => this.setState(initialState);

  render() {
    return (
      <form className={s.addForm} onSubmit={this.handleSubmitForm}>
        <label className={s.formLabel}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.formLabel}>
          Number
          <input
            className={s.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };

export default ContactForm;
