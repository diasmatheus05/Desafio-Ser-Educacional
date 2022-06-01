import { createContext, useContext, useState } from "react";

import { Contact } from "../types";

interface ContactsContextProps {
  contacts: Contact[]
  addContact: (contact: Contact) => void
  deleteContact: (id: string) => void
}

interface ContactsContextProviderProps {
  children: React.ReactNode
}

export const ContactsContext = createContext({} as ContactsContextProps);

export function ContactContextProvider({ children }: ContactsContextProviderProps) {
  const [contacts, setContacts] = useState<Contact[]>([])

  function addContact(contact: Contact) {
    setContacts([ ...contacts, contact ])
  }

  function deleteContact(contactID: string) {
    const newContacts = contacts.filter(item => item.id !== contactID)
    setContacts(newContacts)
  }

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        addContact,
        deleteContact
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export const useContactsContext = () => {
  return useContext(ContactsContext);
};