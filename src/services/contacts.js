// src/services/contacts.js
import { Contact } from '../db/models/contact.js';

export const getAllContacts = async ({
  filter = {},
  skip,
  perPage,
  sortBy,
  sortOrder,
}) => {
  const sortOptions = { [sortBy]: sortOrder };

  const data = await Contact.find(filter)
    .skip(skip)
    .limit(perPage)
    .sort(sortOptions);

  const totalItems = await Contact.countDocuments(filter);

  return { data, totalItems };
};

export const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

export const addContact = async (data) => {
  const newContact = await Contact.create(data);
  return newContact;
};

export const updateContact = async (contactId, data) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    contactId,
    data,
    { new: true },
  );
  return updatedContact;
};

export const removeContact = async (contactId) => {
  const deletedContact = await Contact.findByIdAndDelete(contactId);
  return deletedContact;
};