import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.searchBoxWrap}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(event) => {
          dispatch(changeFilter(event.target.value));
        }}
      />
    </div>
  );
}
