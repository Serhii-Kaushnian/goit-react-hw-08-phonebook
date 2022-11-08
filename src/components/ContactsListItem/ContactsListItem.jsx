import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsAPI';
import {
  Button,
  ItemContainer,
  ItemContainerSpan,
  Item,
} from './ContactsListItem.styled';
import { SpinnerCircularFixed } from 'spinners-react';

export default function ContactsListItem({ contact }) {
  console.log('contact: ', contact);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteContacts = id => {
    deleteContact(id);
  };
  return (
    <>
      {contact && (
        <Item>
          <ItemContainer>
            {contact.name} :
            <ItemContainerSpan>{contact.number}</ItemContainerSpan>
            <Button
              disabled={isDeleting}
              id={contact.id}
              onClick={() => deleteContacts(contact.id)}
              type="button"
            >
              {isDeleting && (
                <SpinnerCircularFixed size={12} style={{ paddingRight: 5 }} />
              )}
              Delete Contact
            </Button>
          </ItemContainer>
        </Item>
      )}
    </>
  );
}
ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
