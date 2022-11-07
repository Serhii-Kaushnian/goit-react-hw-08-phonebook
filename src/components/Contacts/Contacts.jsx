import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useGetContactsQuery } from 'redux/contacts/contactsAPI';
import { AppWrapper, Wrapper } from './Contacts.styled';

export default function Contacts() {
  // const { data: contacts, isFetching, refetch } = useGetContactsQuery();
  // useEffect(() => {
  //   refetch();
  // }, [refetch]);
  return (
    <AppWrapper>
      <Wrapper>
        <ContactForm />
        <Filter />
      </Wrapper>
      {/* {!isFetching && <ContactList contacts={contacts} />} */}
     <ContactList />
    </AppWrapper>
  );
}
