import { useDispatch, useSelector } from "react-redux";
import {
  selectUserContacts,
  selectUserContactsError,
  selectUserContactsIsLoading,
} from "../redux/contacts/selectors";
import Loader from "../components/Loader/Loader";
import { useEffect } from "react";
import {
  apiAddNewContact,
  apiDeleteContact,
  apiGetAllContacts,
} from "../redux/contacts/operations";
import toast from "react-hot-toast";
import AddContactForm from "../components/AddContactForm/AddContactForm";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectUserContactsIsLoading);
  const error = useSelector(selectUserContactsError);

  useEffect(() => {
    dispatch(apiGetAllContacts())
      .unwrap()
      .then(() => {
        toast.success("Contacts loaded successfully🎉");
      });
  }, [dispatch]);

  const onAddContact = (contact) => {
    dispatch(apiAddNewContact(contact))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully🎉");
      });
  };

  const onDeleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully🎉");
      });
  };

  return (
    <div>
      <AddContactForm onAddContact={onAddContact} />
      {isLoading && <Loader />}
      {error !== null && (
        <p style={{ color: "red" }}>{error}. Please, try again later.</p>
      )}
      <ul>
        {contacts?.length === 0 && <li>Contacts list is empty</li>}
        {Array.isArray(contacts) &&
          contacts.map((contact) => (
            <li key={contact.id}>
              <p>
                <b>{contact.name}</b>: {contact.number}
              </p>
              <button onClick={() => onDeleteContact(contact.id)} type="button">
                ❌
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
