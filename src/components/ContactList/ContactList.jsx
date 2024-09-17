import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const filterValue = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filterValue)
  );

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactsItem} key={contact.id}>
          <Contact item={contact} />
        </li>
      ))}
    </ul>
  );
}
