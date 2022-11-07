import { useState, useEffect } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { SpinnerCircularFixed } from 'spinners-react';
import {
  ContactsWrapper,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './ContactForm.styled';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsAPI';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  //=====================================
  // useEffect(() => {
  //   refetch();
  // }, [refetch]);

  const isContactlreadyExist = ({ name }) => {
    return contacts.find(
      contact => contact.name === name && contact.number === number
    );
  };

  const contactFormHadler = data => {
    if (isContactlreadyExist(data)) {
      Notify.info(`Contact ${data.name} is already in Your Phonebook`);
    } else {
      console.log('data: ', data);
      addContact(data);
    }
  };
  //=====================================
  const onContactFormInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const addContactToList = e => {
    e.preventDefault();

    contactFormHadler({ name, number });
    formReset();
  };
  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactsWrapper>
      <Title>Phonebook</Title>
      <Form onSubmit={addContactToList}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onContactFormInputChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onContactFormInputChange}
          />
        </Label>
        <Button type="submit">
          {isLoading && (
            <SpinnerCircularFixed size={20} style={{ paddingRight: 10 }} />
          )}
          Add contact
        </Button>
      </Form>
    </ContactsWrapper>
  );
}
