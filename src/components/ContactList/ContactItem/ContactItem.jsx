import React from 'react';
import PropTypes from 'prop-types';
import {ContactLi, ContactBtn} from './ContactItem.styled'
  

const ContactItem = ({ contact, onDeleteContact }) => {
  const { name, number } = contact;
  return (
    <ContactLi>
      <p>
        {name}: {number}
      </p>
      <ContactBtn
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </ContactBtn>
    </ContactLi>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
