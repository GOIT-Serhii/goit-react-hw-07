import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

("react");
import css from "./App.module.css";
import { selectError, selectIsLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </>
  );
}

export default App;
