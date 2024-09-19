import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li className={css.contactsItem} key={contact.id}>
          <Contact item={contact} />
        </li>
      ))}
    </ul>
  );
}
