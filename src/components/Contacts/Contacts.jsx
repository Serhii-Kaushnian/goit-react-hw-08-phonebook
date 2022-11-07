import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { AppWrapper, Wrapper } from './Contacts.styled';

export default function Contacts() {
  return (
    <AppWrapper>
      <Wrapper>
        <ContactForm></ContactForm>
        <Filter></Filter>
      </Wrapper>
      <ContactList></ContactList>
    </AppWrapper>
  );
}
