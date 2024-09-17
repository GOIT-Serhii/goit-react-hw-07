import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ item }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(item.id));
  };
  return (
    <div className={css.contactWrap}>
      <ul className={css.contactList}>
        <li className={css.contactItem}>
          <FaUser className={css.itemIcon} />
          <p className={css.itemText}>{item.name}</p>
        </li>
        <li className={css.contactItem}>
          <FaPhone className={css.itemIcon} />{" "}
          <p className={css.itemText}>{item.number}</p>
        </li>
      </ul>
      <button className={css.contactBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
