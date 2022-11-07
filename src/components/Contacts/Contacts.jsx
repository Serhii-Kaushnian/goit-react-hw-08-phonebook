import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { AppWrapper, Wrapper } from './Contacts.styled';

export default function Contacts() {
  return (
    <AppWrapper>
      <Wrapper>
        <ContactForm />
        <Filter />
      </Wrapper>
      <ContactList />
    </AppWrapper>
  );
}
